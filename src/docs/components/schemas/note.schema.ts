/**
 * @swagger
 * components:
 *   schemas:
 *     CreateNoteInput:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         title:
 *           type: string
 *           example: My First Note
 *         content:
 *           type: string
 *           example: This is my first note content 👋
 *
 *     Note:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 6871f2fb71ce5944a2906cdf
 *         title:
 *           type: string
 *           example: My First Note
 *         content:
 *           type: string
 *           example: This is my first note content 👋
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2025-07-12T05:30:35.282Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2025-07-12T05:30:35.282Z
 *         __v:
 *           type: integer
 *           example: 0
 *
 *     CreateNoteResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: true
 *         statusCode:
 *           type: integer
 *           example: 201
 *         message:
 *           type: string
 *           example: Note created
 *         data:
 *           $ref: '#/components/schemas/Note'
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         statusCode:
 *           type: integer
 *           example: 400
 *         message:
 *           type: string
 *           example: Some error message
 *         data:
 *           type: 'null'
 *           example: null
 *     GetAllNotesResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: true
 *         statusCode:
 *           type: integer
 *           example: 200
 *         message:
 *           type: string
 *           example: All notes fetched successfully
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Note'
 *
 */
