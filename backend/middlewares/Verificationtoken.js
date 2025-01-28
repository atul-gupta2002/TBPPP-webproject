import jwt from 'jsonwebtoken'



const VerificationToken = (req, res, next) => {
    try {
        console.log('Cookies:', req.cookies); // Debug cookies
        const token = req.cookies.token; // Assuming JWT token in cookies
        if (!token) {
            return res.status(403).json({ success: false, message: 'No token provided' });
        }

        const decoded = jwt.verify(token, process.env.SecretKey); // Replace with your secret key
        req.userId = decoded.userId; // Set userId for downstream use
        next();
    } catch (error) {
        console.error('Middleware Error:', error);
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
};

export { VerificationToken };
