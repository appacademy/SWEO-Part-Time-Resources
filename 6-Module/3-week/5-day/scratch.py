from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///dev.db')
SessionFactory = sessionmaker(bind=engine)

session = SessionFactory()

with engine.connect() as conn:
  # query = f'SELECT {params.desired} FROM {params.table} WHERE id = {params.id}'
  query = """
    SELECT owner.first_name, owner.last_name, pony.name
    FROM owners owner
    JOIN ponies pony ON (owner.id = pony.owner_id)
  """
  res = conn.execute(query)
  
  for row in res:
    print(row['first_name'], row['last_name'], 'owns', row['name'])

engine.dispose()