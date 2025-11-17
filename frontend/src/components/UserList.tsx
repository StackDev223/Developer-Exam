import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { AlertCircle } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  department: string | null;
  created_at: string;
  posts: Post[];
}

interface UserListProps {
  users: User[];
  loading: boolean;
  error: string;
}

export function UserList({ users, loading, error }: UserListProps) {
  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">Loading users...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (users.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            No users found. Create one to get started!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl">{user.name}</CardTitle>
                <CardDescription className="mt-1">
                  {user.email}
                  {user.department && ` • ${user.department}`}
                </CardDescription>
              </div>
              <span className="text-sm text-muted-foreground">
                {user.posts.length} {user.posts.length === 1 ? 'post' : 'posts'}
              </span>
            </div>
          </CardHeader>
          {user.posts.length > 0 && (
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium">Recent Posts:</p>
                <ul className="space-y-1">
                  {user.posts.slice(0, 3).map((post) => (
                    <li key={post.id} className="text-sm text-muted-foreground">
                      • {post.title}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
