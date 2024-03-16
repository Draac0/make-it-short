# Make It Short Backend Service

## Database Setup

Install Postgres on your machine.

```bash
$ psql postgres
```

Create a database for the project.

```sql
CREATE DATABASE make_it_short;
```

Create a user for the project.

```sql
CREATE USER make_it_short_user WITH PASSWORD 'password';
```

Grant all privileges to the user.

```sql
GRANT ALL PRIVILEGES ON DATABASE make_it_short TO make_it_short_user;
```
