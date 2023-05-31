import mysql.connector as mc
conn = mc.connect(host='localhost', user='root', password='Watermelon12', database='menagerie')
c = conn.cursor()


def show_databases():
    databases = ("select owner, count(owner) from pet group by owner")
    c.execute(databases)
    for databases in c:
        print(databases)


def commit_close():
    conn.commit()
    c.close()
    conn.close()


def main():
    show_databases()
    commit_close()


def createdb():
    c.execute("CREATE DATABASE menagerie")

def main():
    show_databases()


if __name__ == '__main__':
    main()