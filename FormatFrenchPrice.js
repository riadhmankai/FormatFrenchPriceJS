// Created by Riadh Mankai on May 14, 2016

// @param: price (String or number)
// @return: French formatted price as a String. Example: 208 502 896,45€
function formatFrenchPrice (p_price) {
    // Replace dots with commas
    var lv_priceString = p_price.toString().replace(".", ",");

    // Remove spaces
    lv_priceString = lv_priceString.replace(" ", "");

    // Determine the comma position
    var lv_commaPosition = lv_priceString.indexOf(",");
    if (lv_commaPosition == -1) {
        lv_commaPosition = lv_priceString.length;
    }

    // Calculate the number of spaces to insert
    var lv_numberOfSpacesToInsert = Math.floor(lv_commaPosition / 3);

    // lst_positions tells us where to insert spaces (indexes)
    var lst_positions = [];
    var lv_spaceCounter = lv_commaPosition - 3;
    for (i = 0; i < lv_numberOfSpacesToInsert; i++) {
        lst_positions.push(lv_spaceCounter);
        lv_spaceCounter -= 3;
    }

    // Insert spaces in the indacated positions or indexes
    for (i = 0; i < lv_numberOfSpacesToInsert; i++) {
        var lv_pos = lst_positions[i];
        lv_priceString = [lv_priceString.slice(0, lv_pos), " ", lv_priceString.slice(lv_pos)].join('');
    }

    // Complete the decimal part
    lv_commaPosition = lv_priceString.indexOf(",");
    if (lv_commaPosition > 0) {
        if ( ((lv_priceString.length - 1) - lv_commaPosition) > 2 ) {
            lv_priceString = lv_priceString.slice(0, lv_commaPosition + 3);
        }
        else if (((lv_priceString.length-1) - lv_commaPosition) == 1) {
            lv_priceString += "0";
        }
    }
    else {
        lv_priceString += ",00";
    }

    // Adding currency (€)
    lv_priceString = lv_priceString + "€";

    return lv_priceString;
}