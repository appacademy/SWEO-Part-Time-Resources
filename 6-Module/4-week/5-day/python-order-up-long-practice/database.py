from dotenv import load_dotenv
load_dotenv()


from app import app, db
from app.models import Employee, Menu, MenuItem, MenuItemType, Table


with app.app_context():
    db.drop_all()
    db.create_all()

    user = Employee(name="Margot", employee_number=1234, password="password")

    beverages = MenuItemType(name="Beverages")
    entrees = MenuItemType(name="Entrees")
    sides = MenuItemType(name="Sides")

    dinner = Menu(name="Dinner")

    fries = MenuItem(name="French fries", price=3.50, type=sides, menu=dinner)
    drp = MenuItem(name="Dr. Pepper", price=1.0, type=beverages, menu=dinner)
    tea = MenuItem(name="Lingonberry Tea", price=1.0, type=beverages, menu=dinner)
    jambalaya = MenuItem(name="Jambalaya", price=21.98, type=entrees, menu=dinner)
    parm = MenuItem(name="Eggplant Parmesan", price=21.98, type=entrees, menu=dinner)

    for index in range(1, 11):
        db.session.add(Table(capacity=index, number=index))

    db.session.add(dinner)
    db.session.add(user)
    db.session.commit()
