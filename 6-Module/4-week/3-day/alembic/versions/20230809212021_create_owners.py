"""create owners

Revision ID: 5ed5ecd5fcc0
Revises: e0e9a2a5092b
Create Date: 2023-08-09 21:20:21.418418

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '5ed5ecd5fcc0'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
  op.create_table(
    "owners",
    sa.Column('id', sa.Integer, primary_key=True),
    sa.Column("first_name", sa.String(50), nullable=False),
    sa.Column("last_name", sa.String(50), nullable=False),
    sa.Column("email", sa.String(255), nullable=False),
  )


def downgrade() -> None:
  op.drop_table("owners")
