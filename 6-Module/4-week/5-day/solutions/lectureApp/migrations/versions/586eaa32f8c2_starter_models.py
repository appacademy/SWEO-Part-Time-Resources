"""starter_models

Revision ID: 586eaa32f8c2
Revises: 
Create Date: 2023-01-12 19:34:09.915684

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '586eaa32f8c2'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('owners',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=False),
    sa.Column('last_name', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=999), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cars',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('manu_year', sa.Integer(), nullable=False),
    sa.Column('make', sa.String(length=999), nullable=True),
    sa.Column('model', sa.String(length=255), nullable=True),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['owner_id'], ['owners.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cars')
    op.drop_table('owners')
    # ### end Alembic commands ###
