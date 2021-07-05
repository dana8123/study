s = "1 2 3 4"
def solution(s):
    answer = ''
    numbers = list(s)
    minimum, maximum = numbers[0], numbers[0]
    for num in numbers:
        if num >= minimum:
            minimum = num
        else:
            maximum = num
    answer = str(minimum) + str(maximum)
    print(answer)
    print(maximum, minimum)
    return answer
solution(s)
