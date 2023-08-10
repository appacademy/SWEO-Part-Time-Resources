"""create ponies

Revision ID: 0878938a1a0b
Revises: 5ed5ecd5fcc0
Create Date: 2023-08-09 21:31:49.219056

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '0878938a1a0b'
down_revision: Union[str, None] = '5ed5ecd5fcc0'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
  op.create_table(
    "ponies",
    sa.Column('id', sa.Integer, primary_key=True),
    sa.Column("first_name", sa.String(50), nullable=False),
    sa.Column("last_name", sa.String(50), nullable=False),
    sa.Column("email", sa.String(255), nullable=False),
  )


def downgrade() -> None:
  op.drop_table("ponies")
