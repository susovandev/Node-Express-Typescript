import { swaggerOptions } from '@/config/swagger.config.js';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
