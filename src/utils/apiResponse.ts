class ApiResponse<T> {
    public status: boolean;
    constructor(
        public statusCode: number,
        public message: string,
        public data?: T | null,
    ) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data || null;
        this.status = statusCode < 400;
    }
}

export default ApiResponse;
