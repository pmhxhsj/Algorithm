import heapq

def solution(scoville, K):
    count = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        mixScoville = heapq.heappop(scoville) + (heapq.heappop(scoville) * 2)
        heapq.heappush(scoville, mixScoville)
        
        count+=1
        
        if len(scoville) == 1 and scoville[0] < K:
            return -1
        
    return count


