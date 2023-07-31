function percentageEvenAndOddNumbers(numberArr) {
    let evenCount = 0
    let oddCount = 0
    let itemCount = numberArr.length

    for (const num of numberArr) {
        if (num % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }

    const evenPercentage = (evenCount / itemCount) * 100
    const oddPercentage = (oddCount / itemCount) * 100

    return {
        even_percentage: evenPercentage,
        odd_percentage: oddPercentage
    }
}

function percentageNumbersGreaterThan1000(numberArr) {
    let itemCount = numberArr.length
    let greaterThan1000Count = 0

    for (const num of numberArr) {
        if (num > 1000) {
            greaterThan1000Count++
        }
    }

    const greaterThan1000Percentage = (greaterThan1000Count / itemCount) * 100

    return {
        greater_than_percentage: greaterThan1000Percentage
    }
}

function averageOfAllNumbers(numberArr, maxNumber) {
    const itemCount = numberArr.length
    const sum = numberArr.reduce((acc, num) => parseInt(acc) + parseInt(num), 0)
    const average = sum / itemCount
    const averagePercentage = (average / maxNumber) * 100

    return {
        average_of_numbers: averagePercentage
    }
}


export default function getArrayAnalisis(numberArr) {
    const { even_percentage, odd_percentage } = percentageEvenAndOddNumbers(numberArr)
    const { greater_than_percentage } = percentageNumbersGreaterThan1000(numberArr)
    const max_number = Math.max(...numberArr)
    const min_number = Math.min(...numberArr)
    const min_number_percentage = (min_number / max_number) * 100
    const { average_of_numbers} = averageOfAllNumbers(numberArr, max_number)

    return [
        'Array size: ' + numberArr.length,
        'Even Numbers %: ' + even_percentage,
        'Odd Numbers %: ' + odd_percentage,
        'Numbers Greater Than 1000 %: ' + greater_than_percentage,
        'Max Number: ' + max_number,
        'Min Number: ' + min_number,
        'Min Numbers %: ' + min_number_percentage,
        'Average of all Numbers: ' + average_of_numbers,
    ]
}