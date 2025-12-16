export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 8;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
};

export const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
};

export interface ValidationErrors {
    email?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
}

export const validateLoginForm = (email: string, password: string): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!email) {
        errors.email = 'Email không được để trống';
    } else if (!validateEmail(email)) {
        errors.email = 'Email không hợp lệ';
    }

    if (!password) {
        errors.password = 'Mật khẩu không được để trống';
    } else if (!validatePassword(password)) {
        errors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
    }

    return errors;
};

export const validateSignupForm = (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!name) {
        errors.name = 'Họ và tên không được để trống';
    } else if (!validateName(name)) {
        errors.name = 'Họ và tên phải có ít nhất 2 ký tự';
    }

    if (!email) {
        errors.email = 'Email không được để trống';
    } else if (!validateEmail(email)) {
        errors.email = 'Email không hợp lệ';
    }

    if (!password) {
        errors.password = 'Mật khẩu không được để trống';
    } else if (!validatePassword(password)) {
        errors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
    }

    if (!confirmPassword) {
        errors.confirmPassword = 'Vui lòng xác nhận mật khẩu';
    } else if (!validatePasswordMatch(password, confirmPassword)) {
        errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }

    return errors;
};
