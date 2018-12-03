function conversion(number) {
    const result = {};
    if (!isFinite(number)) {
        console.log('Допустимы только числа');
        return result;
    }
    const arr = String(number).split('')
    if (+number < 0) {
        if (String(number).length > 4) {
            console.log('Слишком длинное число');
            return result;
        }
        switch (arr.length) {
            case 4:
                result['сотни'] = arr[1];
                result['десятки'] = arr[2];
                result['единицы'] = arr[3];
                break;
            case 3:
                result['десятки'] = arr[1];
                result['единицы'] = arr[2];
                break;
            case 2:
                if (arr[0] == 0) {
                    console.log('Ноль');
                    return result;
                }
                result['единицы'] = arr[1];
                break;
        }
    } else {
        if (String(number).length > 3) {
            console.log('Слишком длинное число');
            return result;
        }
        switch (arr.length) {
            case 3:
                result['сотни'] = arr[0];
                result['десятки'] = arr[1];
                result['единицы'] = arr[2];
                break;
            case 2:
                result['десятки'] = arr[0];
                result['единицы'] = arr[1];
                break;
            case 1:
                if (arr[0] == 0) {
                    console.log('Ноль');
                    return result;
                }
                result['единицы'] = arr[0];
                break;
        }
    }
    return result;
}

console.log(conversion('-123'));
