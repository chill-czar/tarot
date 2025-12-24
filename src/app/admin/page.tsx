"use client";

import React, { useEffect, useState } from "react";
import { api } from "~/lib/axios";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Switch } from "~/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Trash2, Edit, Plus, ArrowLeft, Loader2 } from "lucide-react";

// Updated Product Interface matching strict schema
interface Product {
  _id?: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: string;
  isActive: boolean;
  category: "Live Reading" | "Written Reading";
  createdAt?: string;
}

const initialProductState: Product = {
  title: "",
  description: "",
  shortDescription: "",
  price: 0,
  duration: "",
  isActive: true,
  category: "Live Reading",
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [view, setView] = useState<"list" | "form">("list");
  const [formData, setFormData] = useState<Product>(initialProductState);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch Products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get<Product[]>("/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
      alert("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchProducts();
  }, []);

  // Handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: "Live Reading" | "Written Reading") => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing && formData._id) {
        await api.put(`/products/${formData._id}`, formData);
      } else {
        await api.post("/products", formData);
      }
      await fetchProducts();
      setView("list");
      setFormData(initialProductState);
    } catch (error) {
      console.error("Save failed", error);
      alert("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    setLoading(true);
    try {
      await api.delete(`/products/${id}`);
      await fetchProducts();
    } catch (error) {
      console.error("Delete failed", error);
      alert("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (product: Product) => {
    setFormData(product);
    setIsEditing(true);
    setView("form");
  };

  const addNew = () => {
    setFormData(initialProductState);
    setIsEditing(false);
    setView("form");
  };

  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold tracking-tight">
          {view === "list"
            ? "Product Management"
            : isEditing
              ? "Edit Product"
              : "Add New Product"}
        </h3>
        {view === "list" && (
          <Button onClick={addNew}>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        )}
        {view === "form" && (
          <Button variant="outline" onClick={() => setView("list")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to List
          </Button>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50">
          <Loader2 className="text-primary h-8 w-8 animate-spin" />
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <Card>
          <CardHeader>
            <CardTitle>Products ({products.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {products.length === 0 ? (
              <p className="text-muted-foreground py-8 text-center">
                No products found. Create one!
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((p) => (
                    <TableRow key={p._id}>
                      <TableCell className="font-medium">{p.title}</TableCell>
                      <TableCell>₹{p.price}</TableCell>
                      <TableCell>{p.category}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            p.isActive
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {p.isActive ? "Active" : "Inactive"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => startEdit(p)}
                          className="mr-2"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:bg-red-50 hover:text-red-700"
                          onClick={() => p._id && handleDelete(p._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      )}

      {/* Form View */}
      {view === "form" && (
        <Card className="mx-auto max-w-4xl">
          <CardHeader>
            <CardTitle>{isEditing ? "Edit Product" : "New Product"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              {/* Price & Duration */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    required
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Sub-Title</Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-2">
                <Label htmlFor="shortDescription">Short Description</Label>
                <Input
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Full Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Live Reading">Live Reading</SelectItem>
                    <SelectItem value="Written Reading">
                      Written Reading
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status */}
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, isActive: checked }))
                  }
                />
                <Label htmlFor="isActive">Active Product</Label>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setView("list")}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isEditing ? "Update Product" : "Create Product"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
