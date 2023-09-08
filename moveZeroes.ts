var nums: number[] = [0,1,0,3,12];

function moveZeroes(nums: number[]): number[] {
    let count: number = 0;

    nums.forEach((v, i) => {
        if (v === 0) {
            count++;
        }
    });

    let i = nums.length;
    while (i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
        }
    }

    for(let i = 0; i < count; i++) 
    {   
        nums.push(0);
    }

    return nums;
}

console.log(moveZeroes(nums));