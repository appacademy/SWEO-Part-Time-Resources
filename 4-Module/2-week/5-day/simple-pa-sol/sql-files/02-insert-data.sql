-- Your code here

INSERT INTO tools(id, name, price, department) VALUES
    (1, 'Snow shovel', 16.50, 'Home & Garden'),
    (2, 'Work light', 29.99, 'Electrical'),    
    (3, 'Wheelbarrow', 89.99, 'Home and Garden'),
    (4, 'Pipe Wrench', 18.99, 'Plumbing'),
    (5, 'Pipe Cutter', 36.36, 'Plumbing'),
    (6, 'Rake', 15.45, 'Home and Garden');

INSERT INTO customers(id, first_name, last_name, phone_number) VALUES
    (1, 'John','Smith', 1111111111),
    (2, 'Jane','Doe', 2222222222);


INSERT INTO purchases(quantity, customer_id, tool_id) VALUES
    (1, 1, 2), 
    (2, 1, 5),
    (3, 2, 1),
    (1, 2, 2),
    (1, 2, 4),
    (1, 2, 5),
    (3, 1, 3);
