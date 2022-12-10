"""empty message

Revision ID: 3238c143b402
Revises: 
Create Date: 2022-12-10 10:34:50.252806

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3238c143b402'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('packages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sender', sa.String(length=255), nullable=True),
    sa.Column('recipient', sa.String(length=255), nullable=True),
    sa.Column('origin', sa.String(length=255), nullable=True),
    sa.Column('destination', sa.String(length=255), nullable=True),
    sa.Column('location', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('packages')
    # ### end Alembic commands ###
