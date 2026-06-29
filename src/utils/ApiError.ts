class ApiError extends Error{
    statusCode: number;
    errors: Array<string>;
    stack?: string;
    success: boolean;

    constructor(
        statusCode: number,
        message: string,
        errors: string[] = [],
        stack: string = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.errors = errors
        this.success = false

        if (stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}