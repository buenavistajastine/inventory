"use client"

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Users, columns } from "./columns"
import { DataTable } from "./data-table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from 'react';
import { getUsers } from '@/lib/crud';
import UpdateUserDialog from '@/components/UpdateUserDialog';
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  // Define other properties as per your user data structure
}

export default function UserPage() {
  const [users, setUsers] = useState<Users[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Handle error appropriately, e.g., show error message to user
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-1 flex-col gap-4 py-8 md:gap-8 md:py-4">
        <DataTable columns={columns} data={users} />
      </div>
    </ContentLayout>
  );
}

