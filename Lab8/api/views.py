from django.http import JsonResponse
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse({
        "id": product.id,
        "name": product.name,
        "price": float(product.price),
        "description": product.description,
        "category": product.category_id
    })


def category_list(request):
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    category = Category.objects.get(id=id)
    return JsonResponse({
        "id": category.id,
        "name": category.name
    })


def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = list(products.values())
    return JsonResponse(data, safe=False)