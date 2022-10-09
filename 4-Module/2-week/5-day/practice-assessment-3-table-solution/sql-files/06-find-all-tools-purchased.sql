SELECT tools.name, purchases.quantity FROM tools
JOIN purchases ON (tools.id = purchases.tool_id)
ORDER BY tools.name, purchases.quantity;