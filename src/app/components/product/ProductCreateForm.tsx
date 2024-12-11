"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import { createProduct } from "@/app/services/products";
import { Product } from "./ProductCard";

const CreateProductForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, touchedFields },
        trigger,
        reset,
    } = useForm<Product>({
        defaultValues: { name: "", price: 0, stock: 0, image: "" },
    });

    const onSubmit = async (data: Product) => {
        try {
            await createProduct(data);
            toast.success("Producto creado con éxito");
            onSuccess();
            reset(); // Limpia el formulario
        } catch (error) {
            toast.error("Ocurrió un error al crear el producto");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-6 max-w-md bg-transparent h-full justify-center"
        >
            <h1 className="text-lg font-light text-center">Crear Producto</h1>

            <div className="w-full">
                <Input
                    type="text"
                    placeholder="Nombre del Producto"
                    fullWidth
                    size="lg"
                    isClearable
                    {...register("name", { required: "El nombre es obligatorio" })}
                    onFocusChange={(isFocused) => !isFocused && trigger("name")}
                    errorMessage={
                        touchedFields.name && errors.name ? errors.name.message : undefined
                    }
                    isInvalid={!!(touchedFields.name && errors.name)}
                />
            </div>

            <div className="w-full">
                <Input
                    type="number"
                    placeholder="Precio del Producto"
                    fullWidth
                    size="lg"
                    isClearable
                    {...register("price", {
                        required: "El precio es obligatorio",
                        min: { value: 0.01, message: "El precio debe ser mayor a 0" },
                    })}
                    onFocusChange={(isFocused) => !isFocused && trigger("price")}
                    errorMessage={
                        touchedFields.price && errors.price ? errors.price.message : undefined
                    }
                    isInvalid={!!(touchedFields.price && errors.price)}
                />
            </div>

            <div className="w-full">
                <Input
                    type="number"
                    placeholder="Stock del Producto"
                    fullWidth
                    size="lg"
                    isClearable
                    {...register("stock", {
                        required: "El stock es obligatorio",
                        min: { value: 0, message: "El stock no puede ser negativo" },
                    })}
                    onFocusChange={(isFocused) => !isFocused && trigger("stock")}
                    errorMessage={
                        touchedFields.stock && errors.stock ? errors.stock.message : undefined
                    }
                    isInvalid={!!(touchedFields.stock && errors.stock)}
                />
            </div>

            <Button
                type="submit"
                fullWidth
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                isLoading={isSubmitting}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Creando..." : "Crear"}
            </Button>
        </form>
    );
};

export default CreateProductForm;
