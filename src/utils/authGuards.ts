export const authenticated = (next: any) => (root: any, args: any, context: any, info: any) => {
    if (!context.currentUser) {
        throw new Error('Not authenticated!');
    }

    return next(root, args, context, info);
};