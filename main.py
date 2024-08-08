from fasthtml.common import *

app, rt = fast_app()


@rt("/")
def get():
    return Div(H1("Hello World!"), hx_get="/change")


@rt("/change")
def get():
    return P("You found Alex's website!")


serve()
