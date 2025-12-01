// 744. Find Smallest Letter Greater Than Target

const nextGreatestLetter = function (letters, target) {
    let left = 0, right = letters.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (letters[mid] <= target) { // we want to skip all letters that are NOT strictly greater than the target
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return letters[left % letters.length]; // If a valid element is found:
    // left is already inside the array, modulo does nothing.
    // else: modulo pushes it back to 0 so that we return the first element of the arr(as stated in the constraint)
}

const letters = ["c", "f", "j"];
const target = "c";
console.log(nextGreatestLetter(letters, target));