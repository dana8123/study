class ListNode:
  def __init__(self, key = None, value = None) :
    self.key = key
    self.value = value
    self.next = None

class MyHashMap:
  def __init__(self):
    self.size = 1000
    self.table = collections.defaultdict(ListNode)

  def put(self, key: int, value: int) -> None:
    index = key % self.size
    # 만약 해당 인덱스에 아무것도 없다면, 키, 값을 삽입하고 종료한다.
    if self.table[index].value is None:
      self.table[index] = ListNode(key,value)
      return
    p = self.table[index]
    while p:
      # 만약 해당 인덱스에 이미 노드가 존재하는 경우( 해시충돌 발생 )
      if p.key == key:
        # 이미 키가 존재하는 경우, 값을 업데이트한다.
        p.value = value
        return
      if p.next is None:
        # p = p.next구문에서 p = None이 되는 경우 방지 
        break
      # 새 노드가 생성되면서 연결된다. 기존에 존재하지 않던 키라면 맨 마지막에 새로운 노드가 연결된다.
      p = p.next
  def get(self, key:int) -> int:
    index = key % self.size
    if self.table[index].value is None:
      # 해당 인덱스에 아무것도 없다면 -1을 리턴한다.
      return
    p = self.table[index]
    while p:
      if p.key == key:
        # 일치하는 키가 있다면 value를 리턴한다.
        return p.value
      p = p.next
    # 찾지 못한다면 -1을 리턴한다.
    return -1
  def remove(self, key:int) -> None:
    index = key % self.size
    if self.table[index].value is None:
      return
    p = self.table[index]
    if p.key == key:
      # 인덱스의 첫번째 노드일 때 삭제 처리
      self.table[index] == ListNode() if p.next is None else p.next
      return



