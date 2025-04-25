DataGrid.AST.bypassHTMLFiltering = true;

Highcharts.setOptions({
  chart: {
    styledMode: true
  }
});

// Helper definitions
const stockPrices = Array.from({ length: 41 }, (_, i) => 220 + i); // Prices 220..260

function calculateCallPayoff(price, strike, premium, isLong = true) {
  const multiplier = isLong ? 1 : -1;
  return multiplier * (Math.max(price - strike, 0) - premium) * 100;
}

function calculatePutPayoff(price, strike, premium, isLong = true) {
  const multiplier = isLong ? 1 : -1;
  return multiplier * (Math.max(strike - price, 0) - premium) * 100;
}

const optionsChain = {
  "2025-04-18": {
    calls: [
      { strike: 230, bid: 3.45, ask: 3.75, last: 3.68, change: -0.04, volume: 20334, openInt: 18108, iv: 31.95, delta: 0.801 },
      { strike: 232.5, bid: 1.68, ask: 1.78, last: 1.74, change: -0.30, volume: 68277, openInt: 11362, iv: 27.45, delta: 0.591 },
      { strike: 235, bid: 0.58, ask: 0.59, last: 0.58, change: -0.42, volume: 81863, openInt: 23722, iv: 25.96, delta: 0.293 },
      { strike: 237.5, bid: 0.14, ask: 0.15, last: 0.14, change: 0.30, volume: 20724, openInt: 17283, iv: 26.13, delta: 0.094 },
      { strike: 240, bid: 0.04, ask: 0.05, last: 0.05, change: -0.13, volume: 17923, openInt: 28794, iv: 29.93, delta: 0.035 },
      { strike: 242.5, bid: 0.02, ask: 0.03, last: 0.03, change: -0.05, volume: 4486, openInt: 13384, iv: 35.66, delta: 0.019 },
      { strike: 245, bid: 0.01, ask: 0.02, last: 0.02, change: -0.03, volume: 3021, openInt: 9457, iv: 38.12, delta: 0.010 },
      { strike: 247.5, bid: 0.01, ask: 0.01, last: 0.01, change: -0.01, volume: 1524, openInt: 5738, iv: 41.88, delta: 0.007 },
      { strike: 250, bid: 0.01, ask: 0.01, last: 0.01, change: 0.00, volume: 978, openInt: 3894, iv: 45.32, delta: 0.005 },
      { strike: 252.5, bid: 0.01, ask: 0.01, last: 0.01, change: 0.00, volume: 543, openInt: 2541, iv: 48.65, delta: 0.003 },
      { strike: 255, bid: 0.01, ask: 0.01, last: 0.01, change: 0.00, volume: 312, openInt: 1764, iv: 50.77, delta: 0.002 }
    ],
    puts: [
      { strike: 230, bid: 0.35, ask: 0.37, last: 0.36, priceChange: -0.65, volume: 48783, openInt: 10683, iv: 29.66, delta: -0.182 },
      { strike: 232.5, bid: 0.90, ask: 0.98, last: 0.97, priceChange: -0.92, volume: 33287, openInt: 7433, iv: 26.90, delta: -0.408 },
      { strike: 235, bid: 2.20, ask: 2.35, last: 2.25, priceChange: 1.15, volume: 5643, openInt: 5334, iv: 23.84, delta: -0.725 },
      { strike: 237.5, bid: 4.20, ask: 4.65, last: 4.45, priceChange: -0.84, volume: 875, openInt: 5005, iv: 28.39, delta: -0.888 },
      { strike: 240, bid: 6.55, ask: 7.00, last: 6.90, priceChange: -0.69, volume: 1064, openInt: 6115, iv: 36.75, delta: -0.931 },
      { strike: 242.5, bid: 8.80, ask: 9.80, last: 9.45, priceChange: -1.02, volume: 1763, openInt: 1773, iv: 50.06, delta: -0.930 },
      { strike: 245, bid: 10.50, ask: 11.80, last: 11.20, priceChange: -1.15, volume: 1423, openInt: 2104, iv: 55.18, delta: -0.925 },
      { strike: 247.5, bid: 12.75, ask: 13.90, last: 13.50, priceChange: -1.35, volume: 1194, openInt: 1987, iv: 59.22, delta: -0.920 },
      { strike: 250, bid: 15.30, ask: 16.45, last: 16.00, priceChange: -1.50, volume: 978, openInt: 1782, iv: 63.11, delta: -0.915 },
      { strike: 252.5, bid: 18.10, ask: 19.25, last: 18.90, priceChange: -1.60, volume: 874, openInt: 1623, iv: 66.87, delta: -0.910 },
      { strike: 255, bid: 21.00, ask: 22.15, last: 21.75, priceChange: -1.75, volume: 763, openInt: 1456, iv: 70.44, delta: -0.905 }
    ]
  },
  "2025-05-16": {
    calls: [
      { strike: 230, bid: 4.85, ask: 5.10, last: 5.00, change: -0.08, volume: 15432, openInt: 14023, iv: 28.75, delta: 0.823 },
      { strike: 232.5, bid: 2.95, ask: 3.15, last: 3.05, change: -0.35, volume: 42168, openInt: 9876, iv: 26.15, delta: 0.653 },
      { strike: 235, bid: 1.65, ask: 1.75, last: 1.70, change: -0.38, volume: 53421, openInt: 18543, iv: 24.35, delta: 0.462 },
      { strike: 237.5, bid: 0.85, ask: 0.95, last: 0.90, change: -0.25, volume: 18764, openInt: 15234, iv: 23.85, delta: 0.294 },
      { strike: 240, bid: 0.40, ask: 0.45, last: 0.42, change: -0.18, volume: 11542, openInt: 21435, iv: 24.65, delta: 0.165 },
      { strike: 242.5, bid: 0.18, ask: 0.22, last: 0.20, change: -0.08, volume: 5327, openInt: 11245, iv: 26.25, delta: 0.089 },
      { strike: 245, bid: 0.08, ask: 0.12, last: 0.10, change: -0.05, volume: 3215, openInt: 7654, iv: 28.35, delta: 0.045 },
      { strike: 247.5, bid: 0.03, ask: 0.05, last: 0.04, change: -0.03, volume: 1876, openInt: 4532, iv: 30.65, delta: 0.023 },
      { strike: 250, bid: 0.02, ask: 0.04, last: 0.03, change: -0.01, volume: 1123, openInt: 3254, iv: 33.45, delta: 0.012 },
      { strike: 252.5, bid: 0.01, ask: 0.03, last: 0.02, change: 0.00, volume: 783, openInt: 2143, iv: 35.85, delta: 0.008 },
      { strike: 255, bid: 0.01, ask: 0.02, last: 0.01, change: 0.00, volume: 524, openInt: 1453, iv: 37.95, delta: 0.004 }
    ],
    puts: [
      { strike: 230, bid: 0.85, ask: 0.95, last: 0.90, priceChange: -0.45, volume: 32541, openInt: 8765, iv: 27.35, delta: -0.198 },
      { strike: 232.5, bid: 1.55, ask: 1.70, last: 1.65, priceChange: -0.62, volume: 25342, openInt: 6542, iv: 25.75, delta: -0.362 },
      { strike: 235, bid: 2.75, ask: 2.95, last: 2.85, priceChange: -0.95, volume: 7652, openInt: 4875, iv: 24.45, delta: -0.564 },
      { strike: 237.5, bid: 4.45, ask: 4.75, last: 4.60, priceChange: -0.70, volume: 1541, openInt: 4321, iv: 25.65, delta: -0.728 },
      { strike: 240, bid: 6.55, ask: 6.85, last: 6.70, priceChange: -0.55, volume: 1253, openInt: 5421, iv: 27.85, delta: -0.846 },
      { strike: 242.5, bid: 9.05, ask: 9.45, last: 9.25, priceChange: -0.75, volume: 1432, openInt: 1654, iv: 32.45, delta: -0.917 },
      { strike: 245, bid: 11.75, ask: 12.25, last: 12.00, priceChange: -0.85, volume: 1265, openInt: 1876, iv: 35.65, delta: -0.954 },
      { strike: 247.5, bid: 14.65, ask: 15.15, last: 14.90, priceChange: -0.95, volume: 1087, openInt: 1765, iv: 38.85, delta: -0.974 },
      { strike: 250, bid: 17.75, ask: 18.25, last: 18.00, priceChange: -1.05, volume: 876, openInt: 1564, iv: 41.75, delta: -0.986 },
      { strike: 252.5, bid: 20.85, ask: 21.35, last: 21.10, priceChange: -1.15, volume: 768, openInt: 1432, iv: 44.45, delta: -0.992 },
      { strike: 255, bid: 24.05, ask: 24.55, last: 24.30, priceChange: -1.25, volume: 654, openInt: 1354, iv: 46.85, delta: -0.995 }
    ]
  },
  "2025-06-20": {
    calls: [
      { strike: 230, bid: 6.15, ask: 6.45, last: 6.30, change: -0.12, volume: 10543, openInt: 12543, iv: 26.85, delta: 0.841 },
      { strike: 232.5, bid: 4.25, ask: 4.55, last: 4.40, change: -0.25, volume: 35432, openInt: 8765, iv: 25.25, delta: 0.698 },
      { strike: 235, bid: 2.75, ask: 2.95, last: 2.85, change: -0.30, volume: 42543, openInt: 16542, iv: 23.85, delta: 0.542 },
      { strike: 237.5, bid: 1.65, ask: 1.85, last: 1.75, change: -0.22, volume: 15432, openInt: 13542, iv: 22.95, delta: 0.394 },
      { strike: 240, bid: 0.95, ask: 1.10, last: 1.05, change: -0.15, volume: 9876, openInt: 19543, iv: 22.85, delta: 0.265 },
      { strike: 242.5, bid: 0.55, ask: 0.65, last: 0.60, change: -0.10, volume: 4765, openInt: 10432, iv: 23.65, delta: 0.169 },
      { strike: 245, bid: 0.30, ask: 0.38, last: 0.35, change: -0.07, volume: 3245, openInt: 7123, iv: 24.95, delta: 0.103 },
      { strike: 247.5, bid: 0.15, ask: 0.22, last: 0.19, change: -0.05, volume: 1876, openInt: 4321, iv: 26.35, delta: 0.061 },
      { strike: 250, bid: 0.08, ask: 0.13, last: 0.10, change: -0.03, volume: 1234, openInt: 3124, iv: 27.85, delta: 0.035 },
      { strike: 252.5, bid: 0.04, ask: 0.08, last: 0.06, change: -0.02, volume: 854, openInt: 2043, iv: 29.65, delta: 0.020 },
      { strike: 255, bid: 0.02, ask: 0.05, last: 0.04, change: -0.01, volume: 623, openInt: 1432, iv: 31.25, delta: 0.011 }
    ],
    puts: [
      { strike: 230, bid: 1.35, ask: 1.50, last: 1.45, priceChange: -0.35, volume: 28765, openInt: 7654, iv: 25.85, delta: -0.185 },
      { strike: 232.5, bid: 2.15, ask: 2.35, last: 2.25, priceChange: -0.50, volume: 21543, openInt: 6123, iv: 24.65, delta: -0.315 },
      { strike: 235, bid: 3.25, ask: 3.45, last: 3.35, priceChange: -0.65, volume: 9876, openInt: 4567, iv: 23.75, delta: -0.470 },
      { strike: 237.5, bid: 4.75, ask: 5.00, last: 4.90, priceChange: -0.55, volume: 2543, openInt: 4123, iv: 23.95, delta: -0.618 },
      { strike: 240, bid: 6.65, ask: 6.95, last: 6.80, priceChange: -0.50, volume: 1876, openInt: 5123, iv: 24.85, delta: -0.747 },
      { strike: 242.5, bid: 8.95, ask: 9.30, last: 9.15, priceChange: -0.60, volume: 1654, openInt: 1876, iv: 26.75, delta: -0.842 },
      { strike: 245, bid: 11.65, ask: 12.05, last: 11.85, priceChange: -0.70, volume: 1432, openInt: 1765, iv: 28.75, delta: -0.903 },
      { strike: 247.5, bid: 14.65, ask: 15.05, last: 14.85, priceChange: -0.80, volume: 1234, openInt: 1654, iv: 31.05, delta: -0.942 },
      { strike: 250, bid: 17.85, ask: 18.25, last: 18.05, priceChange: -0.90, volume: 1087, openInt: 1432, iv: 33.45, delta: -0.966 },
      { strike: 252.5, bid: 21.15, ask: 21.55, last: 21.35, priceChange: -1.00, volume: 954, openInt: 1324, iv: 35.75, delta: -0.981 },
      { strike: 255, bid: 24.55, ask: 24.95, last: 24.75, priceChange: -1.10, volume: 843, openInt: 1243, iv: 37.85, delta: -0.989 }
    ]
  }
};


let activeExpiration = Object.keys(optionsChain)[0];

const MAX_OPTIONS_IN_CHART = 3;

function formatExpirationDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

const selectedOptions = {
  calls: [], // Will include {strike, premium, rowIndex, isLong, expiration}
  puts: []  // Will include {strike, premium, rowIndex, isLong, expiration}
};


//Core functions
function updateOptionsGrid(expirationDate) {

  //bugfix-stuff kan fjernes senere
  console.log("Updating grid with expiration date:", expirationDate);
  
  const dateData = optionsChain[expirationDate];
  if (!dateData) {
    console.error("No data found for expiration date:", expirationDate);
    return;
  }
  
  const chartComponent = board.getComponentByCellId("chart");
  if (chartComponent && chartComponent.chart) {
    selectedOptions.calls = [];
    selectedOptions.puts = [];

    document.querySelectorAll("#grid .highcharts-datagrid-tbody tr").forEach(row => {
    row.classList.remove('row-highlight');
        });
    
    const optionsContainer = document.getElementById("selected-options-container");
    if (optionsContainer) {
      optionsContainer.innerHTML = "<p>No options selected</p>";
    }
    
    while (chartComponent.chart.series.length > 0) {
      chartComponent.chart.series[0].remove(false);
    }
    
    chartComponent.chart.xAxis[0].update({
      plotLines: [{
        value: 0,
        color: '#999',
        width: 1,
        label: {
          text: 'Break-even',
          align: 'right'
        }
      }]
    }, false);
    
    chartComponent.chart.xAxis[0].setTitle({ text: "Strike Price" });
    chartComponent.chart.yAxis[0].setTitle({ text: "Value" });
    
    const strategyInfoText = document.getElementById('strategyInfoText');
    if (strategyInfoText) {
      strategyInfoText.textContent = "Select options to view strategy analysis";
    }
        
    document.querySelectorAll(".option-btn").forEach(btn => {
      btn.style.opacity = "1";
    });

    document.querySelectorAll("tr").forEach(row => {
      row.classList.remove('row-highlight');
    });
  }

  const callsData = dateData.calls;
  const putsData = dateData.puts;
  
  try {
    const chartComponent = board.getComponentByCellId("chart");
    if (chartComponent && chartComponent.chart) {
      chartComponent.chart.xAxis[0].update({
        categories: optionsChain[activeExpiration].calls.map(d => d.strike) // Update x-axis categories with strike prices
      }, false);
      chartComponent.chart.redraw(); //Single redraw for performance
    }
    
    const gridContainer = document.getElementById("grid");
    if (!gridContainer) return;
    
    // Wait to ensure DOM is ready
    setTimeout(() => {
      const dataRows = gridContainer.querySelectorAll("tbody tr");
      if (dataRows.length === 0) {
        console.error("No data rows found in grid");
        return;
      }
      
      dataRows.forEach((row, rowIndex) => {
        if (rowIndex >= callsData.length) return;
        
        const call = callsData[rowIndex];
        const put = putsData[rowIndex];
        const cells = row.querySelectorAll("td");
        
        if (cells.length > 0) updateCellIfNotStrike(cells[0], call.bid);
        if (cells.length > 1) updateCellIfNotStrike(cells[1], call.ask);
        if (cells.length > 2) updateCellIfNotStrike(cells[2], call.last);
        if (cells.length > 3) updateCellIfNotStrike(cells[3], call.change);
        if (cells.length > 4) updateCellIfNotStrike(cells[4], call.volume);
        if (cells.length > 5) updateCellIfNotStrike(cells[5], call.openInt);
        if (cells.length > 6) updateCellIfNotStrike(cells[6], call.iv);
        if (cells.length > 7) updateCellIfNotStrike(cells[7], call.delta);
        
        if (cells.length > 9) updateCellIfNotStrike(cells[9], put.bid);
        if (cells.length > 10) updateCellIfNotStrike(cells[10], put.ask);
        if (cells.length > 11) updateCellIfNotStrike(cells[11], put.last);
        if (cells.length > 12) updateCellIfNotStrike(cells[12], put.priceChange);
        if (cells.length > 13) updateCellIfNotStrike(cells[13], put.volume);
        if (cells.length > 14) updateCellIfNotStrike(cells[14], put.openInt);
        if (cells.length > 15) updateCellIfNotStrike(cells[15], put.iv);
        if (cells.length > 16) updateCellIfNotStrike(cells[16], put.delta);
      });
      
      
      console.log("Grid updated in-place with new data");
    }, 50);
  } catch (error) {
    console.error("Error updating grid:", error);
  }
}

function updateCellIfNotStrike(cell, value) {
  if (cell && !cell.querySelector('.option-btn')) {
    if (typeof value === 'number') {
      cell.textContent = value.toFixed(2);
    } else {
      cell.textContent = value || '0';
    }
  }
}

//Ads option payoff lines to the chart
function updateOptionInChart(strike, isCall, isLong) {
  const component = board.getComponentByCellId("chart");
  if (!component || !component.chart) return;
  
  const optionType = isCall ? "Call" : "Put";
  const positionType = isLong ? "Long" : "Short";
  const expDate = formatExpirationDate(activeExpiration);
  const seriesName = `${positionType} ${optionType} ${strike} (${expDate})`;

  // Check for max options limit
  const existingSeries = component.chart.series.find(s => s.name === seriesName);
  const optionSeriesCount = component.chart.series.filter(s => s.name !== "Combined Strategy").length;
  
  //If above limit, remove highlighting etc
  if (!existingSeries && optionSeriesCount >= MAX_OPTIONS_IN_CHART) {
    const rowElement = document.querySelector(`tr:has(.strike-value:contains("${strike}"))`);
    const selector = isCall ? ['.call-long', '.call-short'] : ['.put-long', '.put-short'];
    
    if (rowElement) {
      selector.forEach(sel => rowElement.querySelector(sel).style.opacity = "1");
      
      //Removes options from dict
      if (isCall) {
        selectedOptions.calls = selectedOptions.calls.filter(call => 
          !(call.strike === strike && call.expiration === activeExpiration));
      } else {
        selectedOptions.puts = selectedOptions.puts.filter(put => 
          !(put.strike === strike && put.expiration === activeExpiration));
      }
      
      //Preserves selection for other options at strike
      const isAnyCallSelected = selectedOptions.calls.some(c => 
        c.strike === strike && c.expiration === activeExpiration);
      const isAnyPutSelected = selectedOptions.puts.some(p => 
        p.strike === strike && p.expiration === activeExpiration);
      
      //Remove if no selection at strike
      if (!isAnyCallSelected && !isAnyPutSelected) {
        rowElement.classList.remove('row-highlight');
      }
    }
    
    showMaxOptionsWarning();
    return;
  }
  
  const rowData = isCall 
    ? optionsChain[activeExpiration].calls.find(c => c.strike === strike)
    : optionsChain[activeExpiration].puts.find(p => p.strike === strike);
  
  if (!rowData) return;
  
  const premium = rowData.last;
  const seriesClassName = isCall 
    ? (isLong ? 'call-long-series' : 'call-short-series')
    : (isLong ? 'put-long-series' : 'put-short-series');
  
  component.chart.addSeries({
    name: seriesName,
    data: stockPrices.map(price => ({
      x: price,
      y: isCall 
        ? calculateCallPayoff(price, strike, premium, isLong)
        : calculatePutPayoff(price, strike, premium, isLong)
    })),
    className: seriesClassName,
    type: 'line',
    lineWidth: 1.5,
    dashStyle: getExpirationLineStyle(activeExpiration)
  });
  
  updatePlotlines(strike, isCall, isLong, premium);
  updateCombinedStrategy();
}

function updatePlotlines(strike, isCall, isLong, premium) {
  const component = board.getComponentByCellId("chart");
  if (!component || !component.chart) return;
  
  const optionType = isCall ? "Call" : "Put";
  const chart = component.chart;
  
  // Remove existing plotlines for this option
  const plotLines = chart.xAxis[0].options.plotLines || [];
  chart.xAxis[0].update({
    plotLines: plotLines.filter(line => 
      !line.label || !line.label.text || 
      (!line.label.text.includes(`${optionType} Strike $${strike}`) && 
       !line.label.text.includes(`${optionType} BE $`))
    )
  });
  
  // Add strike line
  chart.xAxis[0].update({
    plotLines: [...chart.xAxis[0].options.plotLines || [], {
      value: strike,
      className: isCall ? 'call-strike-line' : 'put-strike-line',
      dashStyle: 'shortdash',
      width: 1,
      zIndex: 3,
      label: {
        text: `${optionType} Strike $${strike}`,
        align: isCall ? 'left' : 'right'
      }
    }]
  });
  
  // Calculate break-even price
  const breakEven = isCall 
    ? (isLong ? (strike + premium) : (strike - premium))
    : (isLong ? (strike - premium) : (strike + premium));
  
  // Add break-even line
  chart.xAxis[0].update({
    plotLines: [...chart.xAxis[0].options.plotLines || [], {
      value: breakEven,
      className: isCall ? 'call-breakeven-line' : 'put-breakeven-line',
      dashStyle: 'dot',
      width: 1,
      zIndex: 2,
      label: {
        text: `${optionType} BE $${breakEven.toFixed(2)}`,
        align: isCall ? 'right' : 'left'
      }
    }]
  });
}

function updateCombinedStrategy() {
  const component = board.getComponentByCellId("chart");
  
  component.chart.setTitle({ text: "Option Payoff Analysis" });
  component.chart.xAxis[0].setTitle({ text: "Stock Price at Expiration" });
  component.chart.yAxis[0].setTitle({ text: "Profit/Loss ($)" });
  
  const strategyInfoText = document.getElementById("strategyInfoText");
  
  if (selectedOptions.calls.length > 0 || selectedOptions.puts.length > 0) {
    // Calculate combined payoff
    const combinedData = stockPrices.map(price => {
      let totalPayoff = 0;
      
      // Add call payoffs
      selectedOptions.calls.forEach(call => {
        totalPayoff += calculateCallPayoff(price, call.strike, call.premium, call.isLong);
      });
      
      // Add put payoffs
      selectedOptions.puts.forEach(put => {
        totalPayoff += calculatePutPayoff(price, put.strike, put.premium, put.isLong);
      });
      
      return {
        x: price,
        y: totalPayoff
      };
    });
    
    const existingSeries = component.chart.series.find(s => s.name === "Combined Strategy");
    if (existingSeries) {
      existingSeries.remove();
    }
    
    component.chart.addSeries({
      name: "Combined Strategy",
      data: combinedData,
      className: 'combined-strategy-series',
      type: 'line',
      lineWidth: 3,
      zIndex: 10
    });
    
    const showCombinedOnly = document.getElementById('showCombinedOnly')?.checked;
    if (showCombinedOnly) {
      component.chart.series.forEach(series => {
        if (series.name !== "Combined Strategy") {
          series.setVisible(false, false);
        }
      });
      component.chart.redraw();
    }
    
    const breakEvenPoints = [];
    for (let i = 1; i < combinedData.length; i++) {
      if ((combinedData[i-1].y < 0 && combinedData[i].y >= 0) || 
          (combinedData[i-1].y >= 0 && combinedData[i].y < 0)) {
        const x0 = combinedData[i-1].x;
        const x1 = combinedData[i].x;
        const y0 = combinedData[i-1].y;
        const y1 = combinedData[i].y;
        const breakEven = x0 + (0 - y0) * (x1 - x0) / (y1 - y0);
        breakEvenPoints.push(breakEven);
      }
    }
    
    breakEvenPoints.forEach((point, index) => {
      component.chart.xAxis[0].update({
        plotLines: [...component.chart.xAxis[0].options.plotLines || [], {
          value: point,
          className: 'combined-breakeven-line',
          dashStyle: 'dot',
          width: 2,
          zIndex: 5,
          label: {
            text: `Combined BE $${point.toFixed(2)}`,
            align: index % 2 === 0 ? 'left' : 'right'
          }
        }]
      });
    });
    
    const strategy = detectStrategy(selectedOptions);
    
    if (strategy && strategyInfoText) {
      let strategyTypeClass = '';
      if (strategy.outlook.toLowerCase().includes('bullish')) {
        strategyTypeClass = 'bullish-strategy';
      } else if (strategy.outlook.toLowerCase().includes('bearish')) {
        strategyTypeClass = 'bearish-strategy';
      } else {
        strategyTypeClass = 'neutral-strategy';
      }
    
      strategyInfoText.innerHTML = `
        <div class="strategy-header">
          <h3 style="color: #333;">${strategy.type}</h3>
        </div>
        <p style="color: #333;">${strategy.description}</p>
        <div class="strategy-attribute">
          <strong style="color: #333;">Outlook:</strong> 
          <span class="strategy-badge ${strategyTypeClass}">
            ${strategy.outlook.split(',')[0]}
          </span>
          ${strategy.outlook.includes(',') ? 
            `<span style="color: #333;">${strategy.outlook.split(',')[1]}</span>` : ''}
        </div>
        <div class="strategy-attribute">
          <strong style="color: #333;">Max Profit:</strong> 
          <span class="max-profit">${strategy.maxProfit}</span>
        </div>
        <div class="strategy-attribute">
          <strong style="color: #333;">Max Loss:</strong> 
          <span class="max-loss">${strategy.maxLoss}</span>
        </div>
      `;
    } else if (strategyInfoText) {
      strategyInfoText.innerHTML = `
        <p>Custom strategy with ${selectedOptions.calls.length} calls and ${selectedOptions.puts.length} puts.</p>
        <p>No recognized pattern detected.</p>
      `;
    }
    
    // Update the selected options table
    addSelectedOptionTable();
  } else {
    if (strategyInfoText) {
      strategyInfoText.textContent = "Select options to view strategy analysis";
    }
    
    const existingSeries = component.chart.series.find(s => s.name === "Combined Strategy");
    if (existingSeries) {
      existingSeries.remove();
    }
    
    // Clear the selected options table
    addSelectedOptionTable();
  }
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
            "Strike",
            "Calls Bid",
            "Calls Ask",
            "Calls Last",
            "Calls Change",
            "Calls Volume",
            "Calls OpenInt",
            "Calls IV",
            "Calls Delta",
            "Puts Bid",
            "Puts Ask",
            "Puts Last",
            "Puts Change",
            "Puts Volume",
            "Puts OpenInt",
            "Puts IV",
            "Puts Delta"
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
              put.delta
            ];
          })
        }
      }
    ]
  },

  gui: {
    layouts: [{
      rows: [{
        id: 'row-1',
        cells: [{
          id: "expirationSelector"
        }]
      }, {
        id: 'row-2',
        cells: [{
          id: "chart"
        }, {
          id: "strategyInfo"
        }]
      }, {
        id: 'row-3',
        cells: [{
          id: "selectedOptions"
        }, {
          id: "grid"
        }]
      }]
    }]
  },
  components: [
    {
      cell: "expirationSelector",
      type: "HTML",
      title: "Select Expiration Date",
      elements: [{
        tagName: 'div',
        children: [{
          tagName: 'div',
          attributes: {
            id: 'expiration-tabs',
            class: 'highcharts-dashboards-component-content'
          },
          children: Object.keys(optionsChain).map(expDate => ({
            tagName: 'button',
            textContent: formatExpirationDate(expDate),
            attributes: {
              id: `expiration-tab-${expDate}`,
              class: `expiration-tab ${expDate === activeExpiration ? 'active' : ''}`
            }
          }))
        }]
      }],
events: {
  mount: function() {
    console.log("Component mount event fired");
    
    // Add a short delay to ensure DOM elements are rendered
    setTimeout(() => {
      console.log("Attaching expiration tab event listeners");
      const expirationTabs = document.querySelectorAll('.expiration-tab');
      
      if (expirationTabs.length > 0) {
        console.log(`Found ${expirationTabs.length} expiration tabs`);
        
        expirationTabs.forEach(tab => {
          // Clone the element to remove any existing event listeners
          const newTab = tab.cloneNode(true);
          if (tab.parentNode) {
            tab.parentNode.replaceChild(newTab, tab);
          }
          
          newTab.addEventListener('click', function() {
            console.log(`Tab clicked: ${this.id}`);
            const selectedExpiration = this.id.replace('expiration-tab-', '');
            
            // Update active state using classList for styling consistency
            document.querySelectorAll('.expiration-tab').forEach(t => {
              t.classList.toggle('active', t.id === `expiration-tab-${selectedExpiration}`);
            });
            
            activeExpiration = selectedExpiration;
            updateOptionsGrid(selectedExpiration);
          });
        });
        
        console.log("Tab event listeners successfully attached");
      } else {
        console.error("No expiration tabs found in the DOM");
      }
    }, 100); // Short delay of 50ms should be sufficient
  }
}
    },
    {
      cell: "chart",
      type: "Highcharts",
      title: "Options Payoff Analysis",
      chartOptions: {
        chart: {
          animation: false,
          zooming: {
            mouseWheel: false
          }
        },
        title: null, 
        legend: { enabled: true },
        credits: { enabled: false },
        xAxis: {
          categories: optionsChain[activeExpiration].calls.map(d => d.strike),
          title: { text: "Strike Price" },
          crosshair: true,
          plotLines: [{
            value: 0,
            className: 'highcharts-break-even-line',
            width: 1,
            label: {
              text: 'Break-even',
              align: 'right'
            }
          }]
        },
        yAxis: { 
          title: { text: "Value" }
        },
        tooltip: {
          shared: true,
          formatter: function() {
            let s = `<b>Stock Price: $${this.x}</b>`;
            
            this.points.forEach(point => {
              s += `<br/>${point.series.name}: $${Highcharts.numberFormat(point.y, 2)}`;
            });
            
            return s;
          }
        },
        series: []
      },
      events: {
        mount: function() {
          const chartContainer = document.getElementById("chart");
          chartContainer.style.position = "relative";

          const controlsContainer = document.createElement("div");
          controlsContainer.id = "chart-controls";
          
          const visibilityToggle = document.createElement("div");
          visibilityToggle.className = "chart-control-toggle";
          visibilityToggle.innerHTML = `
            <label>
              <input type="checkbox" id="showCombinedOnly"> 
              <span>Show combined only</span>
            </label>
          `;
          
          const resetButton = document.createElement("button");
          resetButton.textContent = "Reset Chart";
          resetButton.className = "chart-control-btn";
          
          resetButton.addEventListener("click", () => {
            updateOptionsGrid(activeExpiration);
          });

          controlsContainer.appendChild(visibilityToggle);
          controlsContainer.appendChild(resetButton);
          chartContainer.appendChild(controlsContainer);

          document.getElementById('showCombinedOnly')?.addEventListener('change', function() {
            const isChecked = this.checked;
            const component = board.getComponentByCellId("chart");
            if (component && component.chart) {
              component.chart.series.forEach(series => {
                if (series.name !== "Combined Strategy") {
                  series.setVisible(!isChecked, false); //
                }
              });
              component.chart.redraw();
            }
          });
        }
      }
    },
    {
      cell: "strategyInfo",
      type: "HTML",
      title: "Strategy Analysis",
      elements: [{
        tagName: 'div',
        attributes: { 
          id: 'strategyInfoContainer',
          class: 'highcharts-dashboards-component-content'
        },
        children: [{
          tagName: 'p',
          attributes: {
            id: 'strategyInfoText'
          },
          textContent: 'Select options to view strategy analysis'
        }]
      }]
    },
    {
      cell: "selectedOptions",
      type: "HTML",
      title: "Selected Options",
      elements: [{
        tagName: 'div',
        attributes: { 
          id: 'selected-options-container',
          class: 'highcharts-dashboards-component-content'
        },
        children: [{
          tagName: 'p',
          textContent: 'No options selected'
        }]
      }]
    },
    {
      cell: "grid",
      connector: { id: "optionsData" },
      type: "DataGrid",
      title: "Options Chain",
      dataGridOptions: {
        editable: false,
        contextMenu: {
          enabled: false
        },
        columnHeaders: {
          enabled: true
        },
        cellHeight: 35,
        header: [
          { columnId: "Calls Bid", format: "Bid" },
          { columnId: "Calls Ask", format: "Ask" },
          { columnId: "Calls Last", format: "Last" },
          { columnId: "Calls Change", format: "Change" },
          { columnId: "Calls Volume", format: "Volume" },
          { columnId: "Calls OpenInt", format: "Open Int" },
          { columnId: "Calls IV", format: "IV" },
          { columnId: "Calls Delta", format: "Delta" },
          { columnId: "Strike", format: "Strike" },
          { columnId: "Puts Bid", format: "Bid" },
          { columnId: "Puts Ask", format: "Ask" },
          { columnId: "Puts Last", format: "Last" },
          { columnId: "Puts Change", format: "Change" },
          { columnId: "Puts Volume", format: "Volume" },
          { columnId: "Puts OpenInt", format: "Open Int" },
          { columnId: "Puts IV", format: "IV" },
          { columnId: "Puts Delta", format: "Delta" }
        ],
        columnDefaults: {
          cells: {
            editable: false,
            formatter: function () {
              if (this.column.id === "Strike") {
                return `
                  <div class="strike-cell">
                    <div class="call-buttons">
                      <button class="option-btn call-long">Long Call</button>
                      <button class="option-btn call-short">Short Call</button>
                    </div>
                    <div class="strike-value">${this.value}</div>
                    <div class="put-buttons">
                      <button class="option-btn put-long">Long Put</button>
                      <button class="option-btn put-short">Short Put</button>
                    </div>
                  </div>
                `;
              }
              return Highcharts.numberFormat(this.value, 2);
            }
          }
        },
        events: {
          cell: {
            afterSetValue: function () {
              if (this.column.id !== "Strike") return;
              
              const strikeValue = parseFloat(this.value);
              const rowIndex = this.row.index;
              const cellElement = this.htmlElement;
              
              // Get button elements
              const longCallBtn = cellElement.querySelector(".call-long");
              const shortCallBtn = cellElement.querySelector(".call-short");
              const longPutBtn = cellElement.querySelector(".put-long");
              const shortPutBtn = cellElement.querySelector(".put-short");
              
              const rowElement = cellElement.closest('tr');

              // Toggle active state for call buttons
              function toggleCallActive(isLong) {
                // Visual indication of active button
                longCallBtn.style.opacity = isLong ? "1" : "0.6";
                shortCallBtn.style.opacity = !isLong ? "1" : "0.6";

                if (rowElement) {
                  rowElement.classList.add('row-highlight');
                }
                
                // Check if call exists already in selectedOptions
                const existingCallIndex = selectedOptions.calls.findIndex(call => 
                  call.strike === strikeValue && call.expiration === activeExpiration);
                
                if (existingCallIndex >= 0) {
                  // Update existing call
                  selectedOptions.calls[existingCallIndex].isLong = isLong;
                } else {
                  // Add new call
                  const callData = optionsChain[activeExpiration].calls[rowIndex];
                  selectedOptions.calls.push({
                    strike: strikeValue,
                    premium: callData.last,
                    rowIndex: rowIndex,
                    isLong: isLong,
                    expiration: activeExpiration
                  });
                }
                
                // Update chart
                updateOptionInChart(strikeValue, true, isLong);
              }
              
              // Toggle active state for put buttons
              function togglePutActive(isLong) {
                longPutBtn.style.opacity = isLong ? "1" : "0.6";
                shortPutBtn.style.opacity = !isLong ? "1" : "0.6";
                
                if (rowElement) {
                  rowElement.classList.add('row-highlight');
                }

                const existingPutIndex = selectedOptions.puts.findIndex(put => 
                  put.strike === strikeValue && put.expiration === activeExpiration);
                
                if (existingPutIndex >= 0) {
                  selectedOptions.puts[existingPutIndex].isLong = isLong;
                } else {
                  const putData = optionsChain[activeExpiration].puts[rowIndex];
                  selectedOptions.puts.push({
                    strike: strikeValue,
                    premium: putData.last,
                    rowIndex: rowIndex,
                    isLong: isLong,
                    expiration: activeExpiration
                  });
                }
                                
                // Update chart
                updateOptionInChart(strikeValue, false, isLong);
              }
              
              // Remove option button click handler
              function removeOption(isCall) {
                if (isCall) {

                  longCallBtn.style.opacity = "1";
                  shortCallBtn.style.opacity = "1";
                  
                  // Remove from selected options
                  selectedOptions.calls = selectedOptions.calls.filter(call => 
                    !(call.strike === strikeValue && call.expiration === activeExpiration));
                  
                  // Remove from chart
                  const component = board.getComponentByCellId("chart");
                  const seriesName = `Call ${strikeValue} (${formatExpirationDate(activeExpiration)})`;
                  const existingSeries = component.chart.series.filter(s => 
                    s.name.includes(seriesName)
                  );
                  existingSeries.forEach(series => series.remove());
                } else {
                  longPutBtn.style.opacity = "1";
                  shortPutBtn.style.opacity = "1";
                  
                  selectedOptions.puts = selectedOptions.puts.filter(put => 
                    !(put.strike === strikeValue && put.expiration === activeExpiration));
                  
                  const component = board.getComponentByCellId("chart");
                  const seriesName = `Put ${strikeValue} (${formatExpirationDate(activeExpiration)})`;
                  const existingSeries = component.chart.series.filter(s => 
                    s.name.includes(seriesName)
                  );
                  existingSeries.forEach(series => series.remove());
                }
                
                // Check if any option remains for this row/expiration
                const isAnyCallSelected = selectedOptions.calls.some(c => 
                  c.strike === strikeValue && c.expiration === activeExpiration);
                const isAnyPutSelected = selectedOptions.puts.some(p => 
                  p.strike === strikeValue && p.expiration === activeExpiration);
                
                // Remove highlight ONLY if no options are left for this strike/expiry
                if (rowElement && !isAnyCallSelected && !isAnyPutSelected) {
                  rowElement.classList.remove('row-highlight');
                }
                
                // Update combined strategy after removing an option
                updateCombinedStrategy();
              }
              


              // Handle Long Call button click
              longCallBtn.addEventListener("click", function() {
                const hasCall = selectedOptions.calls.some(call => 
                  call.strike === strikeValue && call.expiration === activeExpiration);
                const isCurrentlyLong = hasCall && 
                  selectedOptions.calls.find(call => 
                    call.strike === strikeValue && call.expiration === activeExpiration).isLong;
                
                if (hasCall && isCurrentlyLong) {
                  // If clicking the same button again, remove the option
                  removeOption(true);
                } else {
                  // Otherwise toggle to long call
                  toggleCallActive(true);
                }
              });
              
              // Handle Short Call button click
              shortCallBtn.addEventListener("click", function() {
                const hasCall = selectedOptions.calls.some(call => 
                  call.strike === strikeValue && call.expiration === activeExpiration);
                const isCurrentlyShort = hasCall && 
                  !selectedOptions.calls.find(call => 
                    call.strike === strikeValue && call.expiration === activeExpiration).isLong;
                
                if (hasCall && isCurrentlyShort) {
                  // If clicking the same button again, remove the option
                  removeOption(true);
                } else {
                  // Otherwise toggle to short call
                  toggleCallActive(false);
                }
              });
              
              // Handle Long Put button click
              longPutBtn.addEventListener("click", function() {
                const hasPut = selectedOptions.puts.some(put => 
                  put.strike === strikeValue && put.expiration === activeExpiration);
                const isCurrentlyLong = hasPut && 
                  selectedOptions.puts.find(put => 
                    put.strike === strikeValue && put.expiration === activeExpiration).isLong;
                
                if (hasPut && isCurrentlyLong) {
                  // If clicking the same button again, remove the option
                  removeOption(false);
                } else {
                  // Otherwise toggle to long put
                  togglePutActive(true);
                }
              });
              
              // Handle Short Put button click
              shortPutBtn.addEventListener("click", function() {
                const hasPut = selectedOptions.puts.some(put => 
                  put.strike === strikeValue && put.expiration === activeExpiration);
                const isCurrentlyShort = hasPut && 
                  !selectedOptions.puts.find(put => 
                    put.strike === strikeValue && put.expiration === activeExpiration).isLong;
                
                if (hasPut && isCurrentlyShort) {
                  // If clicking the same button again, remove the option
                  removeOption(false);
                } else {
                  // Otherwise toggle to short put
                  togglePutActive(false);
                }
              });
              
              const existingCall = selectedOptions.calls.find(call => 
                call.strike === strikeValue && call.expiration === activeExpiration);
              if (existingCall) {
                longCallBtn.style.opacity = existingCall.isLong ? "1" : "0.6";
                shortCallBtn.style.opacity = !existingCall.isLong ? "1" : "0.6";
              }
              
              const existingPut = selectedOptions.puts.find(put => 
                put.strike === strikeValue && put.expiration === activeExpiration);
              if (existingPut) {
                longPutBtn.style.opacity = existingPut.isLong ? "1" : "0.6";
                shortPutBtn.style.opacity = !existingPut.isLong ? "1" : "0.6";
              }
            }
          }
        }
      }
    }
  ]
});


function detectStrategy(selectedOptions) {
  //Using a dict option exp dates
  const optionsByExpiry = {};
  
  // Organize selected options by expiration date
  selectedOptions.calls.forEach(call => {
    if (!optionsByExpiry[call.expiration]) {
      optionsByExpiry[call.expiration] = { calls: [], puts: [] };
    }
    optionsByExpiry[call.expiration].calls.push(call);
  });
  
  selectedOptions.puts.forEach(put => {
    if (!optionsByExpiry[put.expiration]) {
      optionsByExpiry[put.expiration] = { calls: [], puts: [] };
    }
    optionsByExpiry[put.expiration].puts.push(put);
  });
  
  // Check for multi-expiry strategies
  const expiryDates = Object.keys(optionsByExpiry);
  
  // Calendar Call Spread
  if (expiryDates.length > 1 && selectedOptions.calls.length === 2 && selectedOptions.puts.length === 0) {
    const sortedDates = expiryDates.sort();
    const nearCall = selectedOptions.calls.find(call => call.expiration === sortedDates[0]);
    const farCall = selectedOptions.calls.find(call => call.expiration === sortedDates[1]);
    
    if (nearCall && farCall && !nearCall.isLong && farCall.isLong && nearCall.strike === farCall.strike) {
      return {
        type: "Calendar Call Spread",
        description: `Short call expiring ${formatExpirationDate(nearCall.expiration)}, 
                     long call expiring ${formatExpirationDate(farCall.expiration)}, 
                     both at strike $${nearCall.strike}`,
        outlook: "Neutral to slightly bullish, expecting time decay and low volatility",
        maxProfit: "Limited; typically at near strike price near expiration",
        maxLoss: `Limited to net debit paid: $${((farCall.premium - nearCall.premium) * 100).toFixed(2)}`
      };
    }
  }
  
  // Calendar Put Spread
  if (expiryDates.length > 1 && selectedOptions.puts.length === 2 && selectedOptions.calls.length === 0) {
    const sortedDates = expiryDates.sort();
    const nearPut = selectedOptions.puts.find(put => put.expiration === sortedDates[0]);
    const farPut = selectedOptions.puts.find(put => put.expiration === sortedDates[1]);
    
    if (nearPut && farPut && !nearPut.isLong && farPut.isLong && nearPut.strike === farPut.strike) {
      return {
        type: "Calendar Put Spread",
        description: `Short put expiring ${formatExpirationDate(nearPut.expiration)}, 
                     long put expiring ${formatExpirationDate(farPut.expiration)}, 
                     both at strike $${nearPut.strike}`,
        outlook: "Neutral to slightly bearish, expecting time decay and low volatility",
        maxProfit: "Limited; typically at near strike price near expiration",
        maxLoss: `Limited to net debit paid: $${((farPut.premium - nearPut.premium) * 100).toFixed(2)}`
      };
    }
  }
  
  // Diagonal Call Spread
  if (expiryDates.length > 1 && selectedOptions.calls.length === 2 && selectedOptions.puts.length === 0) {
    const sortedDates = expiryDates.sort();
    const nearCall = selectedOptions.calls.find(call => call.expiration === sortedDates[0]);
    const farCall = selectedOptions.calls.find(call => call.expiration === sortedDates[1]);
    
    if (nearCall && farCall && !nearCall.isLong && farCall.isLong && nearCall.strike !== farCall.strike) {
      return {
        type: "Diagonal Call Spread",
        description: `Short call at strike $${nearCall.strike} expiring ${formatExpirationDate(nearCall.expiration)}, 
                     long call at strike $${farCall.strike} expiring ${formatExpirationDate(farCall.expiration)}`,
        outlook: "Moderately bullish with time decay advantage",
        maxProfit: "Variable depending on stock movement and time decay",
        maxLoss: `Limited to net debit paid: $${((farCall.premium - nearCall.premium) * 100).toFixed(2)}`
      };
    }
  }

  // Double Calendar Spread
  if (expiryDates.length === 2 && 
      selectedOptions.calls.length === 2 && 
      selectedOptions.puts.length === 2) {
    
    const sortedDates = expiryDates.sort();
    const nearCall = selectedOptions.calls.find(call => call.expiration === sortedDates[0]);
    const farCall = selectedOptions.calls.find(call => call.expiration === sortedDates[1]);
    const nearPut = selectedOptions.puts.find(put => put.expiration === sortedDates[0]);
    const farPut = selectedOptions.puts.find(put => put.expiration === sortedDates[1]);
    
    if (nearCall && farCall && nearPut && farPut && 
        !nearCall.isLong && farCall.isLong && 
        !nearPut.isLong && farPut.isLong &&
        nearCall.strike === nearPut.strike &&
        farCall.strike === farPut.strike) {
      
      const netDebit = (farCall.premium - nearCall.premium) + (farPut.premium - nearPut.premium);
      
      return {
        type: "Double Calendar Spread",
        description: `Short options expiring ${formatExpirationDate(sortedDates[0])}, 
                     long options expiring ${formatExpirationDate(sortedDates[1])},
                     at strikes $${nearCall.strike} and $${farCall.strike}`,
        outlook: "Neutral, expecting low volatility now and higher volatility later",
        maxProfit: "Variable based on volatility changes and time decay",
        maxLoss: `Limited to net debit paid: $${(netDebit * 100).toFixed(2)}`
      };
    }
  }
  
  // Check for single-expiry strategies within each expiration date
  for (const expiry in optionsByExpiry) {
    const options = optionsByExpiry[expiry];
    const result = detectSingleExpiryStrategy(options, expiry);
    if (result) return result;
  }
  
  return null;
}

// Option detection for single expiry
function detectSingleExpiryStrategy(options, expirationDate) {
  const { calls, puts } = options;
  
  // Long/Short Call
  if (calls.length === 1 && puts.length === 0) {
    const call = calls[0];
    if (call.isLong) {
      return {
        type: "Long Call",
        description: `Long Call with strike price $${call.strike}, expiring ${formatExpirationDate(expirationDate)}`,
        outlook: "Bullish. Profit when stock price rises significantly above strike price.",
        maxProfit: "Unlimited (as stock price increases)",
        maxLoss: `Limited to premium paid: $${(call.premium * 100).toFixed(2)}`
      };
    } else {
      return {
        type: "Short Call",
        description: `Short Call with strike price $${call.strike}, expiring ${formatExpirationDate(expirationDate)}`,
        outlook: "Bearish to neutral. Profit when stock stays below strike price.",
        maxProfit: `Limited to premium received: $${(call.premium * 100).toFixed(2)}`,
        maxLoss: "Unlimited (as stock price increases)"
      };
    }
  }
  
  // Long/Short Put
  if (puts.length === 1 && calls.length === 0) {
    const put = puts[0];
    if (put.isLong) {
      return {
        type: "Long Put",
        description: `Long Put with strike price $${put.strike}, expiring ${formatExpirationDate(expirationDate)}`,
        outlook: "Bearish. Profit when stock price falls significantly below strike price.",
        maxProfit: `Limited to strike price minus premium: $${((put.strike - put.premium) * 100).toFixed(2)}`,
        maxLoss: `Limited to premium paid: $${(put.premium * 100).toFixed(2)}`
      };
    } else {
      return {
        type: "Short Put",
        description: `Short Put with strike price $${put.strike}, expiring ${formatExpirationDate(expirationDate)}`,
        outlook: "Bullish to neutral. Profit when stock stays above strike price.",
        maxProfit: `Limited to premium received: $${(put.premium * 100).toFixed(2)}`,
        maxLoss: `Limited to strike price minus premium: $${((put.strike - put.premium) * 100).toFixed(2)}`
      };
    }
  }
  
  // Straddle and Strangle
  if (calls.length === 1 && puts.length === 1) {
    const call = calls[0];
    const put = puts[0];
    
    if (call.isLong && put.isLong) {
      if (call.strike === put.strike) {
        const totalPremium = call.premium + put.premium;
        return {
          type: "Long Straddle",
          description: `Long Straddle with both options at strike price $${call.strike}, expiring ${formatExpirationDate(expirationDate)}`,
          outlook: "Expecting significant price movement in either direction.",
          maxProfit: "Unlimited to the upside, limited to strike price minus premium to the downside",
          maxLoss: `Limited to total premium paid: $${(totalPremium * 100).toFixed(2)}`
        };
      } else {
        const totalPremium = call.premium + put.premium;
        const lowerStrike = Math.min(call.strike, put.strike);
        const higherStrike = Math.max(call.strike, put.strike);
        return {
          type: "Long Strangle",
          description: `Long Strangle with call at $${call.strike} and put at $${put.strike}, expiring ${formatExpirationDate(expirationDate)}`,
          outlook: "Expecting significant price movement in either direction.",
          maxProfit: "Unlimited to the upside, limited to lower strike minus premium to the downside",
          maxLoss: `Limited to total premium paid: $${(totalPremium * 100).toFixed(2)}`
        };
      }
    }
    
  }
  
  // Bull Spread using Calls
  if (calls.length === 2 && puts.length === 0) {
    const sortedCalls = [...calls].sort((a, b) => a.strike - b.strike);
    if (sortedCalls[0].isLong && !sortedCalls[1].isLong) {
      const netPremium = sortedCalls[0].premium - sortedCalls[1].premium;
      const maxProfit = (sortedCalls[1].strike - sortedCalls[0].strike - netPremium) * 100;
      return {
        type: "Bull Call Spread",
        description: `Bull Call Spread with long call at $${sortedCalls[0].strike} and short call at $${sortedCalls[1].strike}, expiring ${formatExpirationDate(expirationDate)}`,
        outlook: "Moderately bullish. Profit when stock rises above the lower strike.",
        maxProfit: `Limited to the difference in strikes minus net premium: $${maxProfit.toFixed(2)}`,
        maxLoss: `Limited to net premium paid: $${(netPremium * 100).toFixed(2)}`
      };
    }
  }
  
  
  return null;
}

function addSelectedOptionTable() {
  const container = document.getElementById("selected-options-container");
  if (!container) {
    console.error("Container not found: selected-options-container");
    return;
  }
  
  container.innerHTML = "";
  
  if (selectedOptions.calls.length === 0 && selectedOptions.puts.length === 0) {
    container.innerHTML = "<p>No options selected</p>";
    return;
  }
  
  const table = document.createElement("table");
  
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  
  ["Type", "Position", "Strike", "Premium", "Expiration"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  const tbody = document.createElement("tbody");
  
  //Calls
  selectedOptions.calls.forEach(call => {
    const tr = document.createElement("tr");
    
    const tdType = document.createElement("td");
    tdType.textContent = "Call";
    
    const tdPosition = document.createElement("td");
    tdPosition.textContent = call.isLong ? 'Long' : 'Short';
    
    const tdStrike = document.createElement("td");
    tdStrike.textContent = `$${call.strike}`;
    
    const tdPremium = document.createElement("td");
    tdPremium.textContent = `$${call.premium.toFixed(2)}`;
    
    const tdExpiration = document.createElement("td");
    tdExpiration.textContent = formatExpirationDate(call.expiration);
    
    tr.append(tdType, tdPosition, tdStrike, tdPremium, tdExpiration);
    tbody.appendChild(tr);
  });
  
  //Puts
  selectedOptions.puts.forEach(put => {
    const tr = document.createElement("tr");
    
    const tdType = document.createElement("td");
    tdType.textContent = "Put";
    
    const tdPosition = document.createElement("td");
    tdPosition.textContent = put.isLong ? 'Long' : 'Short';
    
    const tdStrike = document.createElement("td");
    tdStrike.textContent = `$${put.strike}`;
    
    const tdPremium = document.createElement("td");
    tdPremium.textContent = `$${put.premium.toFixed(2)}`;
    
    const tdExpiration = document.createElement("td");
    tdExpiration.textContent = formatExpirationDate(put.expiration);
    
    tr.append(tdType, tdPosition, tdStrike, tdPremium, tdExpiration);
    tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);
  container.appendChild(table);
}

function getExpirationLineStyle(expiration) {
  const expirations = Object.keys(optionsChain);
  const index = expirations.indexOf(expiration);
  const styles = ['Solid', 'ShortDash', 'ShortDot', 'Dash', 'Dot'];
  return styles[index % styles.length];
}

function showMaxOptionsWarning() {
  let warningEl = document.getElementById('chart-max-options-warning');
  
  if (!warningEl) {
    warningEl = document.createElement('div');
    warningEl.id = 'chart-max-options-warning';
    warningEl.style.backgroundColor = 'rgba(217, 83, 79, 0.1)';
    warningEl.style.color = '#d9534f';
    warningEl.style.padding = '8px 12px';
    warningEl.style.borderRadius = '4px';
    warningEl.style.border = '1px solid #d9534f';
    warningEl.style.marginBottom = '10px';
    warningEl.style.fontSize = '14px';
    warningEl.style.position = 'absolute';
    warningEl.style.top = '40px';
    warningEl.style.left = '15px';
    warningEl.style.right = '15px';
    warningEl.style.zIndex = '100';
    
    // Add to chart container
    const chartContainer = document.getElementById('chart');
    if (chartContainer) {
      chartContainer.insertBefore(warningEl, chartContainer.firstChild);
    }
  }
  

  warningEl.textContent = `Maximum ${MAX_OPTIONS_IN_CHART} options can be displayed in chart. Remove an option to add another.`;
  warningEl.style.opacity = '1';
  
  setTimeout(() => {
    warningEl.style.opacity = '0';
    warningEl.style.transition = 'opacity 1s';
    
    setTimeout(() => {
      if (warningEl.parentNode) {
        warningEl.parentNode.removeChild(warningEl);
      }
    }, 1000);
  }, 4000);
}
 
//Denne er bedre fordi har ikke dom contentet loaded bullshit
