Wire in the index to a main rendering index page.

.grid-container {
 display: grid;
 background-color: #E0F6FF;
 grid-gap: 2px;
 grid-template-areas: ". item-a" ;
}

.grid-item {
 background-color: #1E96FF;
 color: #FFFFFF;
 text-align: center;
 padding: 10px;
 margin: 2px;
}

.item-1 {
 grid-area: item-a;
}

.item-2 {
 grid-area: item-b;
}

.item-3 {
 grid-area: item-c;
}