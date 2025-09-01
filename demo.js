DataGrid.AST.bypassHTMLFiltering = true;

Highcharts.setOptions({
  chart: { styledMode: true },
});

// Constants
const MAX_OPTIONS_IN_CHART = 3;
const LINE_STYLES = ["Solid", "ShortDash", "ShortDot", "Dash", "Dot"];

const optionsChain = {
  "2025-04-19": {
    calls: [
      {
        strike: 230,
        bid: 3.55,
        ask: 3.75,
        last: 3.68,
        change: -0.04,
        volume: 20334,
        openInt: 18108,
        iv: 31.95,
        delta: 0.801,
      },
      {
        strike: 235,
        bid: 0.58,
        ask: 0.59,
        last: 0.58,
        change: -0.42,
        volume: 81863,
        openInt: 23722,
        iv: 25.96,
        delta: 0.293,
      },
      {
        strike: 240,
        bid: 0.04,
        ask: 0.05,
        last: 0.05,
        change: -0.13,
        volume: 17923,
        openInt: 28794,
        iv: 29.93,
        delta: 0.035,
      },
    ],
    puts: [
      {
        strike: 230,
        bid: 0.35,
        ask: 0.37,
        last: 0.36,
        priceChange: -0.65,
        volume: 48783,
        openInt: 10683,
        iv: 29.66,
        delta: -0.182,
      },
      {
        strike: 235,
        bid: 2.2,
        ask: 2.35,
        last: 2.25,
        priceChange: 1.15,
        volume: 5643,
        openInt: 5334,
        iv: 23.84,
        delta: -0.725,
      },
      {
        strike: 240,
        bid: 6.55,
        ask: 7.0,
        last: 6.9,
        priceChange: -0.69,
        volume: 1064,
        openInt: 6115,
        iv: 36.75,
        delta: -0.931,
      },
    ],
  },
  "2025-05-16": {
    calls: [
      {
        strike: 230,
        bid: 4.85,
        ask: 5.1,
        last: 5.0,
        change: -0.08,
        volume: 15432,
        openInt: 14023,
        iv: 28.75,
        delta: 0.823,
      },
      {
        strike: 235,
        bid: 1.65,
        ask: 1.75,
        last: 1.7,
        change: -0.38,
        volume: 53421,
        openInt: 18543,
        iv: 24.35,
        delta: 0.462,
      },
      {
        strike: 240,
        bid: 0.4,
        ask: 0.45,
        last: 0.42,
        change: -0.18,
        volume: 11542,
        openInt: 21435,
        iv: 24.65,
        delta: 0.165,
      },
    ],
    puts: [
      {
        strike: 230,
        bid: 0.85,
        ask: 0.95,
        last: 0.9,
        priceChange: -0.45,
        volume: 32541,
        openInt: 8765,
        iv: 27.35,
        delta: -0.198,
      },
      {
        strike: 235,
        bid: 2.75,
        ask: 2.95,
        last: 2.85,
        priceChange: -0.95,
        volume: 7652,
        openInt: 4875,
        iv: 24.45,
        delta: -0.564,
      },
      {
        strike: 240,
        bid: 6.55,
        ask: 6.85,
        last: 6.7,
        priceChange: -0.55,
        volume: 1253,
        openInt: 5421,
        iv: 27.85,
        delta: -0.846,
      },
    ],
  },
};

const stockPrices = Array.from({ length: 41 }, (_, i) => 220 + i);

// DOM Helper
const getStrikeElements = () => document.querySelectorAll(".strike-value");
const findRowByStrike = (strike) =>
  Array.from(getStrikeElements())
    .find((el) => parseFloat(el.textContent) === strike)
    ?.closest("tr");

function getChart() {
  const comp = board.getComponentByCellId("chart");
  return comp && comp.chart ? comp.chart : null;
}
function withChart(cb) {
  const chart = getChart();
  if (chart) cb(chart);
}

// Button State
function updateButtonStates(strikeCell, isCall, isLong, action) {
  const buttons = {
    longCall: strikeCell.querySelector(".call-long"),
    shortCall: strikeCell.querySelector(".call-short"),
    longPut: strikeCell.querySelector(".put-long"),
    shortPut: strikeCell.querySelector(".put-short"),
  };
  Object.values(buttons).forEach((btn) =>
    btn?.classList.remove("selected", "unselected")
  );
  if (action === "remove") return;
  const targetBtn = isCall
    ? isLong
      ? buttons.longCall
      : buttons.shortCall
    : isLong
    ? buttons.longPut
    : buttons.shortPut;
  targetBtn?.classList.add("selected");
}

// Series helper
const createPayoffData = (strike, premium, isCall, isLong) =>
  stockPrices.map((price) => ({
    x: price,
    y: isCall
      ? calculateCallPayoff(price, strike, premium, isLong)
      : calculatePutPayoff(price, strike, premium, isLong),
  }));

const getSeriesClassName = (isCall, isLong) =>
  isCall
    ? isLong
      ? "call-long-series"
      : "call-short-series"
    : isLong
    ? "put-long-series"
    : "put-short-series";

const getSeriesName = (strike, isCall, isLong, expiration) =>
  `${isLong ? "Long" : "Short"} ${
    isCall ? "Call" : "Put"
  } ${strike} (${formatExpirationDate(expiration)})`;

const getOptionData = (expiration, strike, isCall) => {
  const side = isCall ? "calls" : "puts";
  return optionsChain[expiration][side].find((o) => o.strike === strike);
};

function addChartSeries(chart, name, data, className, dashStyle) {
  chart.addSeries(
    { name, data, className, type: "line", lineWidth: 1.5, dashStyle },
    false
  );
}

// Plotline helper
const createStrikePlotline = (strike, isCall) => ({
  value: strike,
  className: isCall ? "call-strike-line" : "put-strike-line",
  dashStyle: "shortdash",
  width: 1.5,
  zIndex: 3,
  color: isCall ? "#28a745" : "#007bff",
  label: {
    text: `${isCall ? "Call" : "Put"} $${strike}`,
    align: isCall ? "left" : "right",
    verticalAlign: "bottom",
    y: -5,
    style: { fontSize: "10px", fontWeight: "bold" },
  },
});

function calculateCallPayoff(price, strike, premium, isLong = true) {
  const m = isLong ? 1 : -1;
  return m * (Math.max(price - strike, 0) - premium) * 100;
}
function calculatePutPayoff(price, strike, premium, isLong = true) {
  const m = isLong ? 1 : -1;
  return m * (Math.max(strike - price, 0) - premium) * 100;
}

let activeExpiration = Object.keys(optionsChain)[0];
const selectedOptions = { calls: [], puts: [] };

function formatExpirationDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function resetStateForExpiration() {
  selectedOptions.calls = [];
  selectedOptions.puts = [];
  document
    .querySelectorAll("#grid .highcharts-datagrid-tbody tr")
    .forEach((r) => r.classList.remove("row-highlight"));
  document
    .querySelectorAll(".option-btn")
    .forEach((b) => b.classList.remove("selected", "unselected"));
  withChart((chart) => {
    while (chart.series.length) chart.series[0].remove(false);
    chart.xAxis[0].update({ plotLines: [] }, false);
    chart.redraw();
  });
  const optionsContainer = document.getElementById(
    "selected-options-container"
  );
  if (optionsContainer) {
    optionsContainer.textContent = "";
    const p = document.createElement("p");
    p.textContent = "No options selected";
    optionsContainer.appendChild(p);
  }
  const strategyInfoText = document.getElementById("strategyInfoText");
  if (strategyInfoText)
    strategyInfoText.textContent = "Select options to view strategy analysis";
}

function rebuildConnectorData(expirationDate) {
  const expData = optionsChain[expirationDate];
  if (!expData) return;
  const newData = expData.calls.map((call, i) => {
    const put = expData.puts[i] || {};
    return [
      call.strike,
      call.bid,
      call.ask,
      call.last,
      call.change,
      call.volume,
      call.openInt,
      call.iv,
      call.delta,
      put.bid,
      put.ask,
      put.last,
      put.priceChange,
      put.volume,
      put.openInt,
      put.iv,
      put.delta,
    ];
  });
  board.dataPool
    .getConnector("optionsData")
    .then((connector) => {
      if (!connector) return;
      if (connector.options && connector.options.data !== undefined) {
        connector.options.data = newData;
      } else if ("data" in connector) {
        connector.data = newData;
      }
      if (connector.load) connector.load();
      else if (connector.reload) connector.reload();
    })
    .catch((e) => console.error("Connector update error:", e));
}

function updateOptionsGrid(expirationDate) {
  if (!optionsChain[expirationDate]) {
    console.error("No data for expiration:", expirationDate);
    return;
  }
  resetStateForExpiration();
  withChart((chart) => {
    chart.xAxis[0].update(
      {
        categories: optionsChain[activeExpiration].calls.map((d) => d.strike),
      },
      false
    );
    chart.redraw();
  });
  rebuildConnectorData(expirationDate);
}

function enforceMaxOptionLimit(strike, isCall) {
  let exceeded = false;
  withChart((chart) => {
    const currentCount = chart.series.filter(
      (s) => s.name !== "Combined Strategy"
    ).length;
    if (currentCount >= MAX_OPTIONS_IN_CHART) {
      exceeded = true;
      const rowElement = findRowByStrike(strike);
      const selectors = isCall
        ? [".call-long", ".call-short"]
        : [".put-long", ".put-short"];
      if (rowElement) {
        selectors.forEach((sel) =>
          rowElement
            .querySelector(sel)
            ?.classList.remove("selected", "unselected")
        );
      }
      const side = isCall ? "calls" : "puts";
      selectedOptions[side] = selectedOptions[side].filter(
        (o) => !(o.strike === strike && o.expiration === activeExpiration)
      );
      if (
        !selectedOptions.calls.some(
          (c) => c.strike === strike && c.expiration === activeExpiration
        ) &&
        !selectedOptions.puts.some(
          (p) => p.strike === strike && p.expiration === activeExpiration
        )
      ) {
        rowElement?.classList.remove("row-highlight");
      }
      showMaxOptionsWarning();
    }
  });
  return exceeded;
}

function ensureOptionSeries(strike, isCall, isLong) {
  if (enforceMaxOptionLimit(strike, isCall)) return;
  const rowData = getOptionData(activeExpiration, strike, isCall);
  if (!rowData) return;
  const premium = rowData.last;
  withChart((chart) => {
    addChartSeries(
      chart,
      getSeriesName(strike, isCall, isLong, activeExpiration),
      createPayoffData(strike, premium, isCall, isLong),
      getSeriesClassName(isCall, isLong),
      getExpirationLineStyle(activeExpiration)
    );
  });
  syncPlotLines();
}

function syncPlotLines() {
  withChart((chart) => {
    const strikeLines = [];
    const usedStrikes = new Set();
    ["calls", "puts"].forEach((side) => {
      selectedOptions[side].forEach((o) => {
        const k = `${side}-${o.strike}`;
        if (!usedStrikes.has(k)) {
          usedStrikes.add(k);
          strikeLines.push(createStrikePlotline(o.strike, side === "calls"));
        }
      });
    });

    // Build / update combined breakeven line if exists
    const combinedSeries = chart.series.find(
      (s) => s.name === "Combined Strategy"
    );
    let beLine = [];
    if (combinedSeries) {
      const data = combinedSeries.points.map((p) => ({ x: p.x, y: p.y }));
      const breakEvenPoints = [];
      for (let i = 1; i < data.length; i++) {
        const prev = data[i - 1];
        const cur = data[i];
        if ((prev.y < 0 && cur.y >= 0) || (prev.y >= 0 && cur.y < 0)) {
          const x0 = prev.x;
          const x1 = cur.x;
          const y0 = prev.y;
          const y1 = cur.y;
          const be = x0 + ((0 - y0) * (x1 - x0)) / (y1 - y0);
          breakEvenPoints.push(be);
        }
      }
      if (breakEvenPoints.length) {
        const v =
          breakEvenPoints.length === 1
            ? breakEvenPoints[0]
            : (Math.min(...breakEvenPoints) + Math.max(...breakEvenPoints)) / 2;
        beLine.push({
          value: v,
          className: "combined-breakeven-line",
          dashStyle: "solid",
          width: 2,
          color: "#ff6b35",
          zIndex: 5,
          label: {
            text: `BE $${v.toFixed(2)}`,
            align: "center",
            verticalAlign: "bottom",
            y: -5,
            style: { fontSize: "10px", fontWeight: "bold", color: "#ff6b35" },
          },
        });
      }
    }
    chart.xAxis[0].update({ plotLines: [...strikeLines, ...beLine] }, false);
    chart.redraw();
  });
}

// Combined strategy
function buildCombinedSeries() {
  return stockPrices.map((price) => {
    let total = 0;
    selectedOptions.calls.forEach((c) => {
      total += calculateCallPayoff(price, c.strike, c.premium, c.isLong);
    });
    selectedOptions.puts.forEach((p) => {
      total += calculatePutPayoff(price, p.strike, p.premium, p.isLong);
    });
    return { x: price, y: total };
  });
}

function updateCombinedStrategy() {
  const hasAny = selectedOptions.calls.length || selectedOptions.puts.length;
  const strategyInfoText = document.getElementById("strategyInfoText");
  withChart((chart) => {
    const existing = chart.series.find((s) => s.name === "Combined Strategy");
    if (existing) existing.remove(false);
    if (hasAny) {
      const combinedData = buildCombinedSeries();
      addChartSeries(
        chart,
        "Combined Strategy",
        combinedData,
        "combined-strategy-series",
        "Solid"
      );
      const cs = chart.series.find((s) => s.name === "Combined Strategy");
      cs?.update({ lineWidth: 3, zIndex: 10 }, false);
      const showCombinedOnly =
        document.getElementById("showCombinedOnly")?.checked;
      if (showCombinedOnly) {
        chart.series.forEach((s) => {
          if (s.name !== "Combined Strategy") s.setVisible(false, false);
        });
      }
    }
    chart.redraw();
  });
  syncPlotLines();
  if (hasAny) {
    const strategy = detectStrategy(selectedOptions);
    renderStrategyInfo(strategy);
  } else if (strategyInfoText) {
    strategyInfoText.textContent = "Select options to view strategy analysis";
  }
  addSelectedOptionTable();
}

function renderStrategyInfo(strategy) {
  const container = document.getElementById("strategyInfoText");
  if (!container) return;
  container.textContent = "";
  if (!strategy) {
    const p1 = document.createElement("p");
    p1.textContent = `Custom strategy with ${selectedOptions.calls.length} calls and ${selectedOptions.puts.length} puts.`;
    const p2 = document.createElement("p");
    p2.textContent = "No recognized pattern detected.";
    container.append(p1, p2);
    return;
  }
  const header = document.createElement("div");
  header.className = "strategy-header";
  const h3 = document.createElement("h3");
  h3.textContent = strategy.type;
  header.appendChild(h3);

  const description = document.createElement("p");
  description.textContent = strategy.description;

  const outlookDiv = document.createElement("div");
  outlookDiv.className = "strategy-attribute";
  const outlookPrimary = strategy.outlook.split(",")[0];
  const remainder = strategy.outlook.split(",").slice(1).join(",");
  const cls = outlookPrimary.toLowerCase().includes("bullish")
    ? "bullish-strategy"
    : outlookPrimary.toLowerCase().includes("bearish")
    ? "bearish-strategy"
    : "neutral-strategy";
  outlookDiv.innerHTML = `<strong>Outlook:</strong> <span class="strategy-badge ${cls}">${outlookPrimary}</span>`;
  if (remainder) {
    const extra = document.createElement("span");
    extra.textContent = remainder;
    outlookDiv.appendChild(extra);
  }

  const profitDiv = document.createElement("div");
  profitDiv.className = "strategy-attribute";
  profitDiv.innerHTML = `<strong>Max Profit:</strong> <span class="max-profit">${strategy.maxProfit}</span>`;

  const lossDiv = document.createElement("div");
  lossDiv.className = "strategy-attribute";
  lossDiv.innerHTML = `<strong>Max Loss:</strong> <span class="max-loss">${strategy.maxLoss}</span>`;

  container.append(header, description, outlookDiv, profitDiv, lossDiv);
}

// Event delegation for option buttons
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".option-btn");
  if (!btn) return;

  const strikeCell = btn.closest(".strike-cell");
  const strike = parseFloat(
    strikeCell?.querySelector(".strike-value")?.textContent
  );
  if (isNaN(strike)) return;

  const isCall =
    btn.classList.contains("call-long") || btn.classList.contains("call-short");
  const isLong =
    btn.classList.contains("call-long") || btn.classList.contains("put-long");
  const side = isCall ? "calls" : "puts";

  const existingIndex = selectedOptions[side].findIndex(
    (o) => o.strike === strike && o.expiration === activeExpiration
  );

  let action = "add";
  if (existingIndex >= 0) {
    const existing = selectedOptions[side][existingIndex];
    if (existing.isLong === isLong) {
      selectedOptions[side].splice(existingIndex, 1);
      action = "remove";
    } else {
      existing.isLong = isLong;
      action = "update";
    }
  } else {
    const optionData = optionsChain[activeExpiration][side].find(
      (o) => o.strike === strike
    );
    if (!optionData) return;
    selectedOptions[side].push({
      strike,
      premium: optionData.last,
      isLong,
      expiration: activeExpiration,
      rowIndex: optionsChain[activeExpiration][side].findIndex(
        (o) => o.strike === strike
      ),
    });
  }

  updateButtonStates(strikeCell, isCall, isLong, action);

  const row = btn.closest("tr");
  if (row) {
    const highlight =
      selectedOptions.calls.some(
        (c) => c.strike === strike && c.expiration === activeExpiration
      ) ||
      selectedOptions.puts.some(
        (p) => p.strike === strike && p.expiration === activeExpiration
      );
    row.classList.toggle("row-highlight", highlight);
  }

  if (action === "remove") {
    withChart((chart) => {
      const nameLong = getSeriesName(strike, isCall, true, activeExpiration);
      const nameShort = getSeriesName(strike, isCall, false, activeExpiration);
      const ser = chart.series.find(
        (s) => s.name === nameLong || s.name === nameShort
      );
      if (ser) ser.remove(false);
      chart.redraw();
    });
    syncPlotLines();
  } else {
    ensureOptionSeries(strike, isCall, isLong);
  }
  updateCombinedStrategy();
});

// Strategy Detection
function createStrategy(type, description, outlook, maxProfit, maxLoss) {
  return { type, description, outlook, maxProfit, maxLoss };
}

function detectStrategy(selectedOptions) {
  const optionsByExpiry = {};
  ["calls", "puts"].forEach((side) =>
    selectedOptions[side].forEach((o) => {
      optionsByExpiry[o.expiration] ||= { calls: [], puts: [] };
      optionsByExpiry[o.expiration][side].push(o);
    })
  );
  const expiryDates = Object.keys(optionsByExpiry).sort();

  function detectCalendarOrDiagonal(sideKey) {
    const arr = selectedOptions[sideKey];
    if (
      expiryDates.length < 2 ||
      arr.length !== 2 ||
      (sideKey === "calls"
        ? selectedOptions.puts.length
        : selectedOptions.calls.length)
    )
      return null;
    const near = arr.find((o) => o.expiration === expiryDates[0]);
    const far = arr.find((o) => o.expiration === expiryDates[1]);
    if (!near || !far || near.isLong || !far.isLong) return null;
    const label = sideKey === "calls" ? "Call" : "Put";
    if (near.strike === far.strike) {
      return createStrategy(
        `Calendar ${label} Spread`,
        `Short ${label.toLowerCase()} expiring ${formatExpirationDate(
          near.expiration
        )}, long ${label.toLowerCase()} expiring ${formatExpirationDate(
          far.expiration
        )}, strike $${near.strike}`,
        sideKey === "calls"
          ? "Neutral to slightly bullish"
          : "Neutral to slightly bearish",
        "Limited; typically near strike at near-term expiration",
        `Limited to net debit: $${((far.premium - near.premium) * 100).toFixed(
          2
        )}`
      );
    } else {
      return createStrategy(
        `Diagonal ${label} Spread`,
        `Short ${label.toLowerCase()} $${near.strike} (${formatExpirationDate(
          near.expiration
        )}), long ${label.toLowerCase()} $${far.strike} (${formatExpirationDate(
          far.expiration
        )})`,
        sideKey === "calls" ? "Moderately bullish" : "Moderately bearish",
        "Variable (depends on movement & decay)",
        `Limited to net debit: $${((far.premium - near.premium) * 100).toFixed(
          2
        )}`
      );
    }
  }

  const calendarCall = detectCalendarOrDiagonal("calls");
  if (calendarCall) return calendarCall;
  const calendarPut = detectCalendarOrDiagonal("puts");
  if (calendarPut) return calendarPut;

  // Double Calendar
  if (
    expiryDates.length === 2 &&
    selectedOptions.calls.length === 2 &&
    selectedOptions.puts.length === 2
  ) {
    const [nearExp, farExp] = expiryDates;
    const nearCall = selectedOptions.calls.find(
      (c) => c.expiration === nearExp
    );
    const farCall = selectedOptions.calls.find((c) => c.expiration === farExp);
    const nearPut = selectedOptions.puts.find((p) => p.expiration === nearExp);
    const farPut = selectedOptions.puts.find((p) => p.expiration === farExp);
    if (
      nearCall &&
      farCall &&
      nearPut &&
      farPut &&
      !nearCall.isLong &&
      farCall.isLong &&
      !nearPut.isLong &&
      farPut.isLong
    ) {
      const netDebit =
        farCall.premium - nearCall.premium + (farPut.premium - nearPut.premium);
      return createStrategy(
        "Double Calendar Spread",
        `Short near expiration ${formatExpirationDate(
          nearExp
        )}, long far expiration ${formatExpirationDate(farExp)} at strikes $${
          nearCall.strike
        } & $${farCall.strike}`,
        "Neutral, low current volatility expectation",
        "Variable (volatility & decay)",
        `Limited to net debit: $${(netDebit * 100).toFixed(2)}`
      );
    }
  }

  // Single-expiry strategies
  for (const exp of expiryDates) {
    const res = detectSingleExpiryStrategy(optionsByExpiry[exp], exp);
    if (res) return res;
  }
  return null;
}

function detectSingleExpiryStrategy(options, expirationDate) {
  const { calls, puts } = options;

  // Long/Short single leg
  if (calls.length === 1 && puts.length === 0) {
    const c = calls[0];
    return c.isLong
      ? createStrategy(
          "Long Call",
          `Long Call $${c.strike} (${formatExpirationDate(expirationDate)})`,
          "Bullish",
          "Unlimited",
          `Premium paid: $${(c.premium * 100).toFixed(2)}`
        )
      : createStrategy(
          "Short Call",
          `Short Call $${c.strike} (${formatExpirationDate(expirationDate)})`,
          "Bearish to neutral",
          `Premium received: $${(c.premium * 100).toFixed(2)}`,
          "Unlimited"
        );
  }
  if (puts.length === 1 && calls.length === 0) {
    const p = puts[0];
    return p.isLong
      ? createStrategy(
          "Long Put",
          `Long Put $${p.strike} (${formatExpirationDate(expirationDate)})`,
          "Bearish",
          `Strike - premium (downside): $${(
            (p.strike - p.premium) *
            100
          ).toFixed(2)}`,
          `Premium paid: $${(p.premium * 100).toFixed(2)}`
        )
      : createStrategy(
          "Short Put",
          `Short Put $${p.strike} (${formatExpirationDate(expirationDate)})`,
          "Bullish to neutral",
          `Premium received: $${(p.premium * 100).toFixed(2)}`,
          `Strike - premium: $${((p.strike - p.premium) * 100).toFixed(2)}`
        );
  }

  // Straddle / Strangle
  if (calls.length === 1 && puts.length === 1) {
    const [c] = calls;
    const [p] = puts;
    if (c.isLong && p.isLong) {
      const tot = c.premium + p.premium;
      if (c.strike === p.strike) {
        return createStrategy(
          "Long Straddle",
          `Long Straddle $${c.strike} (${formatExpirationDate(
            expirationDate
          )})`,
          "Volatility (large move)",
          "Unlimited upside / large downside",
          `Total premium: $${(tot * 100).toFixed(2)}`
        );
      }
      return createStrategy(
        "Long Strangle",
        `Long Strangle Call $${c.strike} / Put $${
          p.strike
        } (${formatExpirationDate(expirationDate)})`,
        "Volatility (large move)",
        "Unlimited upside / significant downside",
        `Total premium: $${(tot * 100).toFixed(2)}`
      );
    }
  }

  // Bull Call Spread
  if (calls.length === 2 && puts.length === 0) {
    const sorted = [...calls].sort((a, b) => a.strike - b.strike);
    if (sorted[0].isLong && !sorted[1].isLong) {
      const net = sorted[0].premium - sorted[1].premium;
      const maxProfit = (sorted[1].strike - sorted[0].strike - net) * 100;
      return createStrategy(
        "Bull Call Spread",
        `Long $${sorted[0].strike} / Short $${
          sorted[1].strike
        } (${formatExpirationDate(expirationDate)})`,
        "Moderately bullish",
        `$${maxProfit.toFixed(2)}`,
        `Net debit: $${(net * 100).toFixed(2)}`
      );
    }
  }
  return null;
}

// ...existing code...
function addSelectedOptionTable() {
  const container = document.getElementById("selected-options-container");
  if (!container) return;
  container.textContent = "";
  const all = [
    ...selectedOptions.calls.map((o) => ({ ...o, _type: "Call" })),
    ...selectedOptions.puts.map((o) => ({ ...o, _type: "Put" })),
  ];
  if (!all.length) {
    const p = document.createElement("p");
    p.textContent = "No options selected";
    container.appendChild(p);
    return;
  }
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const hr = document.createElement("tr");
  ["Type", "Position", "Strike", "Premium", "Expiration"].forEach((h) => {
    const th = document.createElement("th");
    th.textContent = h;
    hr.appendChild(th);
  });
  thead.appendChild(hr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  all.forEach((o) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${o._type}</td>
      <td>${o.isLong ? "Long" : "Short"}</td>
      <td>$${o.strike}</td>
      <td>$${o.premium.toFixed(2)}</td>
      <td>${formatExpirationDate(o.expiration)}</td>
    `;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  container.appendChild(table);
}

function getExpirationLineStyle(expiration) {
  const expirations = Object.keys(optionsChain);
  const index = expirations.indexOf(expiration);
  return LINE_STYLES[index % LINE_STYLES.length];
}

function showMaxOptionsWarning() {
  let warningEl = document.getElementById("chart-max-options-warning");
  if (!warningEl) {
    warningEl = document.createElement("div");
    warningEl.id = "chart-max-options-warning";
    const chartContainer = document.getElementById("chart");
    chartContainer?.insertBefore(warningEl, chartContainer.firstChild);
  }
  warningEl.textContent = `Maximum ${MAX_OPTIONS_IN_CHART} options can be displayed. Remove one to add another.`;
  warningEl.style.opacity = "1";
  setTimeout(() => {
    warningEl.style.opacity = "0";
    setTimeout(() => warningEl.parentNode?.removeChild(warningEl), 800);
  }, 3000);
}

const board = Dashboards.board("container", {
  dataPool: {
    connectors: [
      {
        id: "optionsData",
        type: "JSON",
        options: {
          firstRowAsNames: false,
          orientation: "rows",
          columnNames: [
            "strike",
            "calls_bid",
            "calls_ask",
            "calls_last",
            "calls_change",
            "calls_volume",
            "calls_openint",
            "calls_iv",
            "calls_delta",
            "puts_bid",
            "puts_ask",
            "puts_last",
            "puts_change",
            "puts_volume",
            "puts_openint",
            "puts_iv",
            "puts_delta",
          ],
          data: optionsChain[activeExpiration].calls.map((call, index) => {
            const put = optionsChain[activeExpiration].puts[index] || {};
            return [
              call.strike,
              call.bid,
              call.ask,
              call.last,
              call.change,
              call.volume,
              call.openInt,
              call.iv,
              call.delta,
              put.bid,
              put.ask,
              put.last,
              put.priceChange,
              put.volume,
              put.openInt,
              put.iv,
              put.delta,
            ];
          }),
        },
      },
    ],
  },
  gui: {
    layouts: [
      {
        rows: [
          { id: "row-1", cells: [{ id: "expirationSelector" }] },
          { id: "row-2", cells: [{ id: "chart" }, { id: "strategyInfo" }] },
          { id: "row-3", cells: [{ id: "selectedOptions" }, { id: "grid" }] },
        ],
      },
    ],
  },
  components: [
    {
      cell: "expirationSelector",
      type: "HTML",
      title: "Select Expiration Date",
      elements: [
        {
          tagName: "div",
          children: [
            {
              tagName: "div",
              attributes: {
                id: "expiration-tabs",
                class: "highcharts-dashboards-component-content",
              },
              children: Object.keys(optionsChain).map((expDate, idx) => ({
                tagName: "button",
                textContent: formatExpirationDate(expDate),
                attributes: {
                  id: `expiration-tab-${expDate}`,
                  class: `expiration-tab ${idx === 0 ? "active" : ""}`,
                },
              })),
            },
          ],
        },
      ],
      events: {
        mount: function () {
          setTimeout(() => {
            document.querySelectorAll(".expiration-tab").forEach((tab) => {
              const newTab = tab.cloneNode(true);
              tab.parentNode?.replaceChild(newTab, tab);
              newTab.addEventListener("click", function () {
                const selExp = this.id.replace("expiration-tab-", "");
                document
                  .querySelectorAll(".expiration-tab")
                  .forEach((t) =>
                    t.classList.toggle(
                      "active",
                      t.id === `expiration-tab-${selExp}`
                    )
                  );
                activeExpiration = selExp;
                updateOptionsGrid(selExp);
              });
            });
          }, 80);
        },
      },
    },
    {
      cell: "chart",
      type: "Highcharts",
      title: "Options Payoff Analysis",
      chartOptions: {
        chart: { animation: false, zooming: { mouseWheel: false } },
        title: { text: "Options Payoff Analysis" },
        legend: { enabled: true },
        credits: { enabled: false },
        xAxis: {
          categories: optionsChain[activeExpiration].calls.map((d) => d.strike),
          title: { text: "Stock Price at Expiration" },
          crosshair: true,
          plotLines: [],
        },
        yAxis: { title: { text: "Profit/Loss ($)" } },
        tooltip: {
          shared: true,
          formatter: function () {
            let s = `<b>Stock Price: $${this.x}</b>`;
            this.points.forEach((p) => {
              s += `<br/>${p.series.name}: $${Highcharts.numberFormat(p.y, 2)}`;
            });
            return s;
          },
        },
        series: [],
      },
      events: {
        mount: function () {
          const chartContainer = document.getElementById("chart");
          const controlsContainer = document.createElement("div");
          controlsContainer.id = "chart-controls";

          const visibilityToggle = document.createElement("div");
          visibilityToggle.className = "chart-control-toggle";
          const label = document.createElement("label");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = "showCombinedOnly";
          const span = document.createElement("span");
          span.textContent = "Show combined only";
          label.append(checkbox, span);
          visibilityToggle.appendChild(label);

          const resetButton = document.createElement("button");
          resetButton.textContent = "Reset Chart";
          resetButton.className = "chart-control-btn";
          resetButton.addEventListener("click", () =>
            updateOptionsGrid(activeExpiration)
          );

          controlsContainer.append(visibilityToggle, resetButton);
          chartContainer.appendChild(controlsContainer);

          checkbox.addEventListener("change", function () {
            withChart((chart) => {
              chart.series.forEach((s) => {
                if (s.name !== "Combined Strategy")
                  s.setVisible(!this.checked, false);
              });
              chart.redraw();
            });
          });
        },
      },
    },
    {
      cell: "strategyInfo",
      type: "HTML",
      title: "Strategy Analysis",
      elements: [
        {
          tagName: "div",
          attributes: {
            id: "strategyInfoContainer",
            class: "highcharts-dashboards-component-content",
          },
          children: [
            {
              tagName: "p",
              attributes: { id: "strategyInfoText" },
              textContent: "Select options to view strategy analysis",
            },
          ],
        },
      ],
    },
    {
      cell: "selectedOptions",
      type: "HTML",
      title: "Selected Options",
      elements: [
        {
          tagName: "div",
          attributes: {
            id: "selected-options-container",
            class: "highcharts-dashboards-component-content",
          },
          children: [{ tagName: "p", textContent: "No options selected" }],
        },
      ],
    },
    {
      cell: "grid",
      connector: { id: "optionsData" },
      type: "DataGrid",
      title: "Options Chain",
      dataGridOptions: {
        editable: false,
        contextMenu: { enabled: false },
        columnHeaders: { enabled: true },
        cellHeight: 35,
        header: [
          { columnId: "calls_bid", format: "Bid" },
          { columnId: "calls_ask", format: "Ask" },
          { columnId: "calls_last", format: "Last" },
          { columnId: "calls_change", format: "Change" },
          { columnId: "calls_volume", format: "Volume" },
          { columnId: "calls_openint", format: "Open Int" },
          { columnId: "calls_iv", format: "IV" },
          { columnId: "calls_delta", format: "Delta" },
          { columnId: "strike", format: "Strike" },
          { columnId: "puts_bid", format: "Bid" },
          { columnId: "puts_ask", format: "Ask" },
          { columnId: "puts_last", format: "Last" },
          { columnId: "puts_change", format: "Change" },
          { columnId: "puts_volume", format: "Volume" },
          { columnId: "puts_openint", format: "Open Int" },
          { columnId: "puts_iv", format: "IV" },
          { columnId: "puts_delta", format: "Delta" },
        ],
        columnDefaults: {
          cells: {
            formatter: function () {
              if (this.column.id === "strike") {
                return `
                  <div class="strike-cell">
                    <div class="call-buttons">
                      <button class="option-btn call-long" data-side="calls" data-position="long">Long Call</button>
                      <button class="option-btn call-short" data-side="calls" data-position="short">Short Call</button>
                    </div>
                    <div class="strike-value">${this.value}</div>
                    <div class="put-buttons">
                      <button class="option-btn put-long" data-side="puts" data-position="long">Long Put</button>
                      <button class="option-btn put-short" data-side="puts" data-position="short">Short Put</button>
                    </div>
                  </div>
                `;
              }
              return Highcharts.numberFormat(this.value, 2);
            },
          },
        },
        events: {
          cell: {
            afterSetValue: function () {
              if (this.column.id !== "strike") return;
              const strikeValue = parseFloat(this.value);
              const cellElement = this.htmlElement;
              const existingCall = selectedOptions.calls.find(
                (c) =>
                  c.strike === strikeValue && c.expiration === activeExpiration
              );
              if (existingCall)
                updateButtonStates(
                  cellElement,
                  true,
                  existingCall.isLong,
                  "update"
                );
              const existingPut = selectedOptions.puts.find(
                (p) =>
                  p.strike === strikeValue && p.expiration === activeExpiration
              );
              if (existingPut)
                updateButtonStates(
                  cellElement,
                  false,
                  existingPut.isLong,
                  "update"
                );
            },
          },
        },
      },
    },
  ],
});
