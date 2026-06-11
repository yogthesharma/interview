# Sample PR — `feat: add user signup endpoint`

```diff
+ // routes/users.ts
+ app.post("/users", async (req, reply) => {
+   const { email, password, name } = req.body;
+
+   const existing = await db.query(
+     `SELECT * FROM users WHERE email = '${email}'`
+   );
+   if (existing.rows.length) {
+     return reply.status(400).send({ error: "exists" });
+   }
+
+   const user = await db.query(
+     `INSERT INTO users (email, password, name) VALUES ('${email}', '${password}', '${name}') RETURNING *`
+   );
+
+   reply.send(user.rows[0]);
+ });
```

**Your task:** List feedback before reading `05-review-pr-feedback.md`.
