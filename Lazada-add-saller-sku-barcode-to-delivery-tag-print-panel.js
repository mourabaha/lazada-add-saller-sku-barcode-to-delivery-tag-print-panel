if (location.pathname == "/order/query"){
	window.onhashchange = function() {
    	if(location.hash == '#print'){
    		add_barcode();
    	}
	};
	window.onafterprint = function() {
    	window.history.back();
	};
	console.log('ADD BARCODE SCRIPT READY');
}

function add_barcode(){
	console.log('Print');
	SKU = document.querySelectorAll('td.item_sku_seller');

	for(i = 0; i < SKU.length; i++ ){
		var sku_cell = SKU[i];
		var sku = sku_cell.textContent;
		var img = document.createElement('img');
		// img.setAttribute('src','https://www.barcodesinc.com/generator/image.php?type=C128B&width=278&height=50&xres=2&font=3&code='+sku);
		img.setAttribute('src','http://bwipjs-api.metafloor.com/?bcid=code128&text='+sku);
		img.setAttribute('style', 'display: block;height: 10px; width: 100px;');
		sku_cell.appendChild(img);
	}
}
