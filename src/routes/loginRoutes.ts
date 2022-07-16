import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
    </form>
  `);
});

router.post('/login', (req: Request, res: Response) => {
  
})

export { router };