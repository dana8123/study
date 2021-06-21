prices = [1, 2, 3, 2, 3]
def solution(prices):
    answer = [0] * len(prices)
    stack = []
    
    for i, price in enumerate(prices):

        #현재 가격과 스택의 인덱스값을 비교해서 더 작으면 정답처리
        while stack and price < prices[stack[-1]]:
            last = stack.pop()
            answer[last] = i - last
        stack.append(i)
    while stack:
      last = stack.pop()
      answer[last] = len(prices) - 1 - last
    print(answer)
    return answer

solution(prices)