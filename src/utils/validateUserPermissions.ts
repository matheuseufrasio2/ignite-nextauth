interface User {
  permissions: string[];
  roles: string[];
}

interface ValidadeUserPermissionParams {
  user: User;
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({
  user,
  permissions,
  roles
}: ValidadeUserPermissionParams) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every(permission => {
      return user.permissions.includes(permission)
    });

    if (!hasAllPermissions) return false;
  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.some(role => {
      return user.roles.includes(role)
    });

    if (!hasAllRoles) return false;
  }

  return true;
}