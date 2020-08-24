class Triangle
{
    constructor(a,b,c){
        if (a + b < c || a + c < b || b + c <= a) {
            this.illegal = true;
        } else {
            this.sides = [a,b,c];
        }        
    }
  
    kind() {
        const tallySides = (sides) => {
            return sides.reduce( (t, n, i, a) => {
                if (a.length != 3 || n <= 0)  {
                    throw "Dark Days";
                }               
                if (n in t) {
                    t[n]++
                } else {
                    t[n] = 1;
                }
                return t;     
            }, {})
        }   
        
        const getKindFromTally = (t) => {            
            const totals = Object.values(t)
            if (totals.includes(3)) {
                return 'equilateral';
            } else if (totals.includes(2)) {
                return 'isosceles';
            } else {
                return 'scalene';
            }
        }
        
        if (this.illegal) throw('Illegal triangle my friend');
        const tally = tallySides(this.sides);
        return getKindFromTally(Object.values(tally));
    }
}
  
export default Triangle