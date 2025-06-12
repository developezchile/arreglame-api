// 📦 Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// 🛠️ Configuración centralizada de la app
const config = {
    // 🔧 Servidor
    port: process.env.PORT || 3940,

    // 🗄️ Base de datos
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/lupulos',

    // 🔐 JWT - Tokens
    jwtSecret: process.env.JWT_SECRET, // ❗ Requerido
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET, // ❗ Requerido
    tokenExpiration: process.env.TOKEN_EXPIRATION || '15m',
    refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION || '30d',

    // 🌐 OAuth (Google)
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleCallbackUrl: process.env.GOOGLE_CALLBACK_URL,

    // 📋 Logs
    logLevel: process.env.LOG_LEVEL || 'info',
};

if (!config.jwtSecret || !config.jwtRefreshSecret) {
    throw new Error('❌ JWT_SECRET y JWT_REFRESH_SECRET son obligatorios en el archivo .env');
}

export default config;
