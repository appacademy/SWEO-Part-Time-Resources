"""create the owners table

Revision ID: 00ecf70b0ee0
Revises: 6fef5fbd2a88
Create Date: 2023-08-09 17:15:55.599999

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '00ecf70b0ee0'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
  op.create_table(
    "owners",
    sa.Column("id", sa.Integer, primary_key=True),
    sa.Column("first_name", sa.String(50), nullable=False),
    sa.Column("last_name", sa.String(50), nullable=False),
    sa.Column("email", sa.String(255), nullable=False),
  )


def downgrade() -> None:
  op.drop_table("owners")
