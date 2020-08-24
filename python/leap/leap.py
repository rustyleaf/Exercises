def is_leap_year(n):

    def divby(num, d):
        return num%d == 0

    lambda n: divby(n, 4) and (not divby(n, 100) or divby(n, 400))(n)