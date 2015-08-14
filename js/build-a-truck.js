/* This script is Copyright (c) Paul McFedries and
Logophilia Limited (http://www.mcfedries.com/).
Permission is granted to use this script as long as
this Copyright notice remains in place.*/

function round_decimals(original_number, decimals) {
    var result1 = original_number * Math.pow(10, decimals)
    var result2 = Math.round(result1)
    var result3 = result2 / Math.pow(10, decimals)
    return pad_with_zeros(result3, decimals)
}

function pad_with_zeros(rounded_value, decimal_places) {

    // Convert the number to a string
    var value_string = rounded_value.toString()

    // Locate the decimal point
    var decimal_location = value_string.indexOf(".")

    // Is there a decimal point?
    if (decimal_location == -1) {

        // If no, then all decimal places will be padded with 0s
        decimal_part_length = 0

        // If decimal_places is greater than zero, tack on a decimal point
        value_string += decimal_places > 0 ? "." : ""
    }
    else {

        // If yes, then only the extra decimal places will be padded with 0s
        decimal_part_length = value_string.length - decimal_location - 1
    }

    // Calculate the number of decimal places that need to be padded with 0s
    var pad_total = decimal_places - decimal_part_length

    if (pad_total > 0) {

        // Pad the string with 0s
        for (var counter = 1; counter <= pad_total; counter++)
            value_string += "0"
        }
    return value_string
}

var pole_array = [
    ["ClassLngth","CubicFoot","GrdLine Circum","Top Circum","CCAWeight","PentaWeight","E-TWeight"],
    ["1/100",159.3,58.5,27,8913.2,8508.054,9020.52],
    ["1/30",23.2,36.5,27,1298.09,1239.09,1313.72],
    ["1/35",28.5,39,27,1594.63,1522.16,1613.84],
    ["1/40",34.3,41,27,1919.16,1831.929,1942.27],
    ["1/45",40.4,43,27,2260.47,2157.724,2287.69],
    ["1/50",47,45,27,2629.76,2510.223,2661.42],
    ["1/55",54.1,46.5,27,3027.02,2889.427,3063.47],
    ["1/60",62.8,48,27,3513.8,3354.085,3556.11],
    ["1/65",73,49.5,27,4084.52,3898.857,4133.7],
    ["1/70",84,51,27,4699.99,4486.356,4756.58],
    ["1/75",94.5,52.5,27,5287.49,5047.15,5351.16],
    ["1/80",106.6,54,27,5964.52,5693.399,6036.33],
    ["1/85",120,55,27,6714.28,6409.08,6795.12],
    ["1/90",135.6,56,27,7587.13,7242.26,7678.49],
    ["1/95",145.9,57,27,8163.44,7792.373,8261.73],
    ["2/100",125.3,55,25,7010.82,6692.147,7095.24],
    ["2/30",19.6,34,25,1096.67,1046.816,1109.87],
    ["2/35",24.4,36.5,25,1365.24,1303.18,1381.67],
    ["2/40",29.5,38.5,25,1650.59,1575.566,1670.47],
    ["2/45",34.7,40.5,25,1941.54,1853.292,1964.92],
    ["2/50",40.2,42,25,2249.28,2147.042,2276.37],
    ["2/55",46.6,43.5,25,2607.38,2488.859,2638.77],
    ["2/60",53.5,45,25,2993.45,2857.382,3029.49],
    ["2/65",60.8,46.5,25,3401.9,3247.267,3442.86],
    ["2/70",68.7,48,25,3843.92,3669.198,3890.21],
    ["2/75",77,49,25,4308.33,4112.493,4360.2],
    ["2/80",86,50.5,25,4811.9,4593.174,4869.84],
    ["2/85",95.7,51.5,25,5354.64,5111.241,5419.11],
    ["2/90",106.7,53,25,5970.11,5698.74,6041.99],
    ["2/95",115.2,54,25,6445.7,6152.717,6523.32],
    ["3/25",12.3,29.5,23,688.21,656.93,696.5],
    ["3/30",16.7,32,23,934.4,891.9303,945.65],
    ["3/35",21,34,23,1175,1121.589,1189.15],
    ["3/40",25.5,36,23,1426.78,1361.929,1443.96],
    ["3/45",30.2,37.5,23,1689.76,1612.952,1710.11],
    ["3/50",35,39,23,1958.33,1869.315,1981.91],
    ["3/55",40,40.5,23,2238.09,2136.36,2265.04],
    ["3/60",45.6,42,23,2551.42,2435.45,2582.15],
    ["3/65",51.1,43.5,23,2859.16,2729.2,2893.59],
    ["3/70",57.1,45,23,3194.88,3049.654,3233.34],
    ["3/75",63.8,46,23,3569.76,3407.494,3612.74],
    ["3/80",70.6,47,23,3950.23,3770.675,3997.8],
    ["3/85",78.1,48,23,4369.87,4171.243,4422.49],
    ["3/90",86,49,23,4811.9,4593.174,4869.84],
    ["4/25",10.4,27.5,21,581.9,555.45,588.91],
    ["4/30",14.2,29.5,21,794.52,758.4078,804.09],
    ["4/35",18.2,31.5,21,1018.33,972.0438,1030.59],
    ["4/40",22.1,33.5,21,1236.55,1180.339,1251.43],
    ["4/45",26.3,35,21,1471.55,1404.657,1489.26],
    ["4/50",30.6,36.5,21,1712.14,1634.315,1732.76],
    ["4/55",35.1,38,21,1963.93,1874.656,1987.57],
    ["4/60",39.8,39,21,2226.9,2125.678,2253.71],
    ["4/65",44.6,40.5,21,2495.47,2382.042,2525.52],
    ["4/70",49.6,41.5,21,2775.23,2649.086,2808.65],
    ["5/25",8.9,25.5,19,497.97,475.34,503.97],
    ["5/30",12,27.5,19,671.43,640.908,679.51],
    ["5/35",15.6,29,19,872.86,833.1804,883.37],
    ["5/40",19.2,31,19,1074.28,1025.453,1087.22],
    ["5/45",23.1,32.5,19,1292.5,1233.748,1308.06],
    ["6/25",7.6,23,17,425.24,405.91,430.36],
    ["6/30",10,25,17,559.52,534.09,566.26],
    ["6/35",13.5,27,17,755.36,721.0215,764.45],
    ["6/40",16.8,28.5,17,940,897.2712,951.32],
    ["7/20",4.3,19.5,15,240.59,229.66,243.49],
    ["7/25",6.3,21.5,15,352.5,336.48,356.74],
    ["7/30",8.3,23.5,15,464.4,443.2947,470],
    ["7/35",11.7,25,15,654.64,624.8853,662.52],
    ["9/20",3.5,,11,195.83,186.9315,198.1896],
    ["9/25",5,,11,279.76,267.045,283.128],
    ["9/30",5.8,,11,324.5216,309.7722,328.4285]
  ]
function calc()
{
  with (document.forms['frm'])
  {
    var classIndex = classLength.selectedIndex;
    var qty = quantity.value;
    var re = /^\d+$/;
    if( classIndex < 1 ) {
      alert("Please select a 'Class/Length'");
      classLength.focus();
      return false;
    }

    if(!re.test(qty)) {
      alert("Quantity must be a number");
      quantity.focus();
      return false;
    }
    cubic.value =  round_decimals(qty * pole_array[classIndex][1], 1);

    CCA.value =   Math.round(qty * pole_array[classIndex][4]);
    Penta.value = Math.round(qty * pole_array[classIndex][5]);
    CCATruck.value =   Math.ceil(cubic.value/830);
    PentaTruck.value = Math.ceil(cubic.value/880);

    doProgress('cca', cubic.value, 830);
    doProgress('penta', cubic.value, 880);
    return false;
  }
  return false;
}

function doProgress(poleType, currentWeight, totalWeight)
{
  document.getElementById(poleType + "_caption").innerHTML = Math.ceil(currentWeight % totalWeight) + ' of '+totalWeight+' CFT';
  var percentFill = Math.round((currentWeight % totalWeight)/totalWeight * 10);
  for(i =1; i<=percentFill; i++)
  {
    var element = document.getElementById(poleType+"_cell" + i);
    element.className = 'full';
  }
  for(; i<=10; i++)
  {
    var element = document.getElementById(poleType+"_cell" + i);
    element.className = 'empty';
  }
}