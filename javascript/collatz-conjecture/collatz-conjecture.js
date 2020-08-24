export const steps = (n, s = -1) => {
    s ++;    
    if (n < 1) throw('Only positive numbers are allowed');    
    const addstep = (n) => {
        return steps((n % 2 == 0) ? n / 2 : n * 3 + 1, s)
    }
    return (n==1) ? s : addstep(n, s);
}