class Book:
  
  def setData(self, title, price, author) :
    self.title = title
    self.price = price
    self.author = author

  def printData(self):
    print('제목 : ', self.title)
    print('가격 : ', self.price)
    print('저자 : ', self.author)
  
  def __init__(self, title, price, author):
    self.setData(title, price, author)
    print('책 객체를 새로 만들었어요~')

b = Book('내가먹었찌롱',2000,'미니')
c = Book('나도먹었는데',30000,'연재')
b.printData()
c.printData()