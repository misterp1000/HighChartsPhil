DataGrid.AST.bypassHTMLFiltering = true;

Highcharts.setOptions({
  chart: { styledMode: true },
});

const MAX_OPTIONS_IN_CHART = 3;

const optionsChain = {
  "2025-04-18": {
    calls: [
      {
        strike: 230,
        bid: 3.45,
        ask: 3.75,
        last: 3.68,
        change: -0.04,
        volume: 20334,
        openInt: 18108,
        iv: 31.95,
        delta: 0.801,
      },
      {
        strike: 232.5,
        bid: 1.68,
        ask: 1.78,
        last: 1.74,
        change: -0.3,
        volume: 68277,
        openInt: 11362,
        iv: 27.45,
        delta: 0.591,
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
        strike: 237.5,
        bid: 0.14,
        ask: 0.15,
        last: 0.14,
        change: 0.3,
        volume: 20724,
        openInt: 17283,
        iv: 26.13,
        delta: 0.094,
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
      {
        strike: 242.5,
        bid: 0.02,
        ask: 0.03,
        last: 0.03,
        change: -0.05,
        volume: 4486,
        openInt: 13384,
        iv: 35.66,
        delta: 0.019,
      },
      {
        strike: 245,
        bid: 0.01,
        ask: 0.02,
        last: 0.02,
        change: -0.03,
        volume: 3021,
        openInt: 9457,
        iv: 38.12,
        delta: 0.01,
      },
      {
        strike: 247.5,
        bid: 0.01,
        ask: 0.01,
        last: 0.01,
        change: -0.01,
        volume: 1524,
        openInt: 5738,
        iv: 41.88,
        delta: 0.007,
      },
      {
        strike: 250,
        bid: 0.01,
        ask: 0.01,
        last: 0.01,
        change: 0.0,
        volume: 978,
        openInt: 3894,
        iv: 45.32,
        delta: 0.005,
      },
      {
        strike: 252.5,
        bid: 0.01,
        ask: 0.01,
        last: 0.01,
        change: 0.0,
        volume: 543,
        openInt: 2541,
        iv: 48.65,
        delta: 0.003,
      },
      {
        strike: 255,
        bid: 0.01,
        ask: 0.01,
        last: 0.01,
        change: 0.0,
        volume: 312,
        openInt: 1764,
        iv: 50.77,
        delta: 0.002,
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
        strike: 232.5,
        bid: 0.9,
        ask: 0.98,
        last: 0.97,
        priceChange: -0.92,
        volume: 33287,
        openInt: 7433,
        iv: 26.9,
        delta: -0.408,
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
        strike: 237.5,
        bid: 4.2,
        ask: 4.65,
        last: 4.45,
        priceChange: -0.84,
        volume: 875,
        openInt: 5005,
        iv: 28.39,
        delta: -0.888,
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
      {
        strike: 242.5,
        bid: 8.8,
        ask: 9.8,
        last: 9.45,
        priceChange: -1.02,
        volume: 1763,
        openInt: 1773,
        iv: 50.06,
        delta: -0.93,
      },
      {
        strike: 245,
        bid: 10.5,
        ask: 11.8,
        last: 11.2,
        priceChange: -1.15,
        volume: 1423,
        openInt: 2104,
        iv: 55.18,
        delta: -0.925,
      },
      {
        strike: 247.5,
        bid: 12.75,
        ask: 13.9,
        last: 13.5,
        priceChange: -1.35,
        volume: 1194,
        openInt: 1987,
        iv: 59.22,
        delta: -0.92,
      },
      {
        strike: 250,
        bid: 15.3,
        ask: 16.45,
        last: 16.0,
        priceChange: -1.5,
        volume: 978,
        openInt: 1782,
        iv: 63.11,
        delta: -0.915,
      },
      {
        strike: 252.5,
        bid: 18.1,
        ask: 19.25,
        last: 18.9,
        priceChange: -1.6,
        volume: 874,
        openInt: 1623,
        iv: 66.87,
        delta: -0.91,
      },
      {
        strike: 255,
        bid: 21.0,
        ask: 22.15,
        last: 21.75,
        priceChange: -1.75,
        volume: 763,
        openInt: 1456,
        iv: 70.44,
        delta: -0.905,
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
        strike: 232.5,
        bid: 2.95,
        ask: 3.15,
        last: 3.05,
        change: -0.35,
        volume: 42168,
        openInt: 9876,
        iv: 26.15,
        delta: 0.653,
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
        strike: 237.5,
        bid: 0.85,
        ask: 0.95,
        last: 0.9,
        change: -0.25,
        volume: 18764,
        openInt: 15234,
        iv: 23.85,
        delta: 0.294,
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
      {
        strike: 242.5,
        bid: 0.18,
        ask: 0.22,
        last: 0.2,
        change: -0.08,
        volume: 5327,
        openInt: 11245,
        iv: 26.25,
        delta: 0.089,
      },
      {
        strike: 245,
        bid: 0.08,
        ask: 0.12,
        last: 0.1,
        change: -0.05,
        volume: 3215,
        openInt: 7654,
        iv: 28.35,
        delta: 0.045,
      },
      {
        strike: 247.5,
        bid: 0.03,
        ask: 0.05,
        last: 0.04,
        change: -0.03,
        volume: 1876,
        openInt: 4532,
        iv: 30.65,
        delta: 0.023,
      },
      {
        strike: 250,
        bid: 0.02,
        ask: 0.04,
        last: 0.03,
        change: -0.01,
        volume: 1123,
        openInt: 3254,
        iv: 33.45,
        delta: 0.012,
      },
      {
        strike: 252.5,
        bid: 0.01,
        ask: 0.03,
        last: 0.02,
        change: 0.0,
        volume: 783,
        openInt: 2143,
        iv: 35.85,
        delta: 0.008,
      },
      {
        strike: 255,
        bid: 0.01,
        ask: 0.02,
        last: 0.01,
        change: 0.0,
        volume: 524,
        openInt: 1453,
        iv: 37.95,
        delta: 0.004,
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
        strike: 232.5,
        bid: 1.55,
        ask: 1.7,
        last: 1.65,
        priceChange: -0.62,
        volume: 25342,
        openInt: 6542,
        iv: 25.75,
        delta: -0.362,
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
        strike: 237.5,
        bid: 4.45,
        ask: 4.75,
        last: 4.6,
        priceChange: -0.7,
        volume: 1541,
        openInt: 4321,
        iv: 25.65,
        delta: -0.728,
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
      {
        strike: 242.5,
        bid: 9.05,
        ask: 9.45,
        last: 9.25,
        priceChange: -0.75,
        volume: 1432,
        openInt: 1654,
        iv: 32.45,
        delta: -0.917,
      },
      {
        strike: 245,
        bid: 11.75,
        ask: 12.25,
        last: 12.0,
        priceChange: -0.85,
        volume: 1265,
        openInt: 1876,
        iv: 35.65,
        delta: -0.954,
      },
      {
        strike: 247.5,
        bid: 14.65,
        ask: 15.15,
        last: 14.9,
        priceChange: -0.95,
        volume: 1087,
        openInt: 1765,
        iv: 38.85,
        delta: -0.974,
      },
      {
        strike: 250,
        bid: 17.75,
        ask: 18.25,
        last: 18.0,
        priceChange: -1.05,
        volume: 876,
        openInt: 1564,
        iv: 41.75,
        delta: -0.986,
      },
      {
        strike: 252.5,
        bid: 20.85,
        ask: 21.35,
        last: 21.1,
        priceChange: -1.15,
        volume: 768,
        openInt: 1432,
        iv: 44.45,
        delta: -0.992,
      },
      {
        strike: 255,
        bid: 24.05,
        ask: 24.55,
        last: 24.3,
        priceChange: -1.25,
        volume: 654,
        openInt: 1354,
        iv: 46.85,
        delta: -0.995,
      },
    ],
  },
  "2025-06-20": {
    calls: [
      {
        strike: 230,
        bid: 6.15,
        ask: 6.45,
        last: 6.3,
        change: -0.12,
        volume: 10543,
        openInt: 12543,
        iv: 26.85,
        delta: 0.841,
      },
      {
        strike: 232.5,
        bid: 4.25,
        ask: 4.55,
        last: 4.4,
        change: -0.25,
        volume: 35432,
        openInt: 8765,
        iv: 25.25,
        delta: 0.698,
      },
      {
        strike: 235,
        bid: 2.75,
        ask: 2.95,
        last: 2.85,
        change: -0.3,
        volume: 42543,
        openInt: 16542,
        iv: 23.85,
        delta: 0.542,
      },
      {
        strike: 237.5,
        bid: 1.65,
        ask: 1.85,
        last: 1.75,
        change: -0.22,
        volume: 15432,
        openInt: 13542,
        iv: 22.95,
        delta: 0.394,
      },
      {
        strike: 240,
        bid: 0.95,
        ask: 1.1,
        last: 1.05,
        change: -0.15,
        volume: 9876,
        openInt: 19543,
        iv: 22.85,
        delta: 0.265,
      },
      {
        strike: 242.5,
        bid: 0.55,
        ask: 0.65,
        last: 0.6,
        change: -0.1,
        volume: 4765,
        openInt: 10432,
        iv: 23.65,
        delta: 0.169,
      },
      {
        strike: 245,
        bid: 0.3,
        ask: 0.38,
        last: 0.35,
        change: -0.07,
        volume: 3245,
        openInt: 7123,
        iv: 24.95,
        delta: 0.103,
      },
      {
        strike: 247.5,
        bid: 0.15,
        ask: 0.22,
        last: 0.19,
        change: -0.05,
        volume: 1876,
        openInt: 4321,
        iv: 26.35,
        delta: 0.061,
      },
      {
        strike: 250,
        bid: 0.08,
        ask: 0.13,
        last: 0.1,
        change: -0.03,
        volume: 1234,
        openInt: 3124,
        iv: 27.85,
        delta: 0.035,
      },
      {
        strike: 252.5,
        bid: 0.04,
        ask: 0.08,
        last: 0.06,
        change: -0.02,
        volume: 854,
        openInt: 2043,
        iv: 29.65,
        delta: 0.02,
      },
      {
        strike: 255,
        bid: 0.02,
        ask: 0.05,
        last: 0.04,
        change: -0.01,
        volume: 623,
        openInt: 1432,
        iv: 31.25,
        delta: 0.011,
      },
    ],
    puts: [
      {
        strike: 230,
        bid: 1.35,
        ask: 1.5,
        last: 1.45,
        priceChange: -0.35,
        volume: 28765,
        openInt: 7654,
        iv: 25.85,
        delta: -0.185,
      },
      {
        strike: 232.5,
        bid: 2.15,
        ask: 2.35,
        last: 2.25,
        priceChange: -0.5,
        volume: 21543,
        openInt: 6123,
        iv: 24.65,
        delta: -0.315,
      },
      {
        strike: 235,
        bid: 3.25,
        ask: 3.45,
        last: 3.35,
        priceChange: -0.65,
        volume: 9876,
        openInt: 4567,
        iv: 23.75,
        delta: -0.47,
      },
      {
        strike: 237.5,
        bid: 4.75,
        ask: 5.0,
        last: 4.9,
        priceChange: -0.55,
        volume: 2543,
        openInt: 4123,
        iv: 23.95,
        delta: -0.618,
      },
      {
        strike: 240,
        bid: 6.65,
        ask: 6.95,
        last: 6.8,
        priceChange: -0.5,
        volume: 1876,
        openInt: 5123,
        iv: 24.85,
        delta: -0.747,
      },
      {
        strike: 242.5,
        bid: 8.95,
        ask: 9.3,
        last: 9.15,
        priceChange: -0.6,
        volume: 1654,
        openInt: 1876,
        iv: 26.75,
        delta: -0.842,
      },
      {
        strike: 245,
        bid: 11.65,
        ask: 12.05,
        last: 11.85,
        priceChange: -0.7,
        volume: 1432,
        openInt: 1765,
        iv: 28.75,
        delta: -0.903,
      },
      {
        strike: 247.5,
        bid: 14.65,
        ask: 15.05,
        last: 14.85,
        priceChange: -0.8,
        volume: 1234,
        openInt: 1654,
        iv: 31.05,
        delta: -0.942,
      },
      {
        strike: 250,
        bid: 17.85,
        ask: 18.25,
        last: 18.05,
        priceChange: -0.9,
        volume: 1087,
        openInt: 1432,
        iv: 33.45,
        delta: -0.966,
      },
      {
        strike: 252.5,
        bid: 21.15,
        ask: 21.55,
        last: 21.35,
        priceChange: -1.0,
        volume: 954,
        openInt: 1324,
        iv: 35.75,
        delta: -0.981,
      },
      {
        strike: 255,
        bid: 24.55,
        ask: 24.95,
        last: 24.75,
        priceChange: -1.1,
        volume: 843,
        openInt: 1243,
        iv: 37.85,
        delta: -0.989,
      },
    ],
  },
};

const stockPrices = Array.from({ length: 41 }, (_, i) => 220 + i);

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

function addChartSeries(chart, name, data, className) {
  if (chart.series.find((s) => s.name === name)) return;
  chart.addSeries(
    { name, data, className, type: "line", lineWidth: 1.5 },
    false
  );
}

const createStrikePlotline = (strike, isCall) => ({
  value: strike,
  className: isCall ? "call-strike-line" : "put-strike-line",
  label: {
    text: `${isCall ? "Call" : "Put"} $${strike}`,
    align: isCall ? "left" : "right",
    verticalAlign: "bottom",
    y: -5,
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
      getSeriesClassName(isCall, isLong)
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
          label: {
            text: `BE $${v.toFixed(2)}`,
            align: "center",
            verticalAlign: "bottom",
            y: -5,
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
        "combined-strategy-series"
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
