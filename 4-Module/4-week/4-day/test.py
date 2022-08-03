def solution(x, y):
    obj = {}
    for id in x:
        if(obj.get(id)):
            obj[id] += 1
        else:
            obj[id] = 1
    for id in y:
        if(obj.get(id)):
            obj[id] += 1
        else:
            obj[id] = 1
    for key, value in obj.items():
        if((value % 2) == 1):
            return key

def solution(x, y):
    return set(x).difference(set(y)).pop()
print(solution([13, 5, 6, 2, 5], [5, 2, 5, 13]))
