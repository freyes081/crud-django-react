from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view 

from .models import Blog
from .serializers import BlogSerializer

@api_view(['GET'])
def getBlog(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postBlog(request):
    data = request.data
    blog = Blog.objects.create(
        body=data['body']
    )
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def putBlog(request, pk):
    blog = Blog.objects.get(pk=pk)
    data = request.data
    blog.body = data['body']
    blog.save()
    serializer = BlogSerializer(instance=blog, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

@api_view(['DELETE'])
def deleteBlog(request, pk):
    blog = Blog.objects.get(pk=pk)
    blog.delete()
    return Response('Blog eliminado')