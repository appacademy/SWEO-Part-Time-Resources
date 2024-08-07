{
	"info": {
		"_postman_id": "328b545c-5c21-4118-9515-b0824b5bdf62",
		"name": "AirBNB_Comprehensive",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "15571502"
	},
	"item": [
		{
			"name": "Get CSRF Token",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"var xsrfCookie = postman.getResponseCookie(\"XSRF-TOKEN\"); ",
							"postman.setEnvironmentVariable('xsrftoken', xsrfCookie.value);"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{url}}/csrf/restore",
					"host": [
						"{{url}}"
					],
					"path": [
						"csrf",
						"restore"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Get Spots of Current User",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Get Reviews of Current User",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Get All Current User's Bookings",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Get All Bookings for a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create an Image for a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create a Review for a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create an Image for a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/5000/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"5000",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create a Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Edit a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Edit a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Edit a Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete a Spot Image",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spot-images/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"spot-images",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete a Review Image",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/review-images/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"review-images",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete a Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Current User - Not Logged In",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Sign Up",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"FirstTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"first.test@gmail.com\",\n  \"username\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Sign Up - Duplicate Email",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"FirstTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"first.test@gmail.com\",\n  \"username\": \"uniqueusername\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Sign Up - Duplicate Username",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"FirstTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"unique.email@gmail.com\",\n  \"username\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Sign Up - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"\",\n  \"lastName\": \"\",\n  \"email\": \"\",\n  \"username\": \"\",\n  \"password\": \"\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Log In - Username",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Log Out",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Log In - Invalid Credentials",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"wrong password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Log In - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"\",\n  \"password\": \"\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Log In - Email",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"first.test@gmail.com\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Current User",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Spots",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('spotId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"123 Should Exist Street\",\n  \"city\": \"San Frangoodtogo\",\n  \"state\": \"California\",\n  \"country\": \"United States of Valid Data\",\n  \"lat\": 37.7645358,\n  \"lng\": -122.4730327,\n  \"name\": \"The Good Spot\",\n  \"description\": \"Place where valid data can stay\",\n  \"price\": 123\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('spotImageId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Spot - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"\",\n  \"city\": \"\",\n  \"state\": \"\",\n  \"country\": \"\",\n  \"lat\": 537.7645358,\n  \"lng\": -522.4730327,\n  \"name\": \"This Spot's name is longer than 50 characters, which means this should throw an error!\",\n  \"description\": \"\",\n  \"price\": -50\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create an Image for a Spot - Invalid Spot Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Spots - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Spots of Current User - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of a Spot by Id - Verify Creation, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get Details of a Spot by Id - Invalid Spot Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"321 Valid Edit Way\",\n  \"city\": \"Edicity\",\n  \"state\": \"New Editia\",\n  \"country\": \"United States of Edited Data\",\n  \"lat\": -26.6534247,\n  \"lng\": 133.5641438,\n  \"name\": \"The Edited Spot\",\n  \"description\": \"Place where valid edits can stay\",\n  \"price\": 321\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Spot - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"\",\n  \"city\": \"\",\n  \"state\": \"\",\n  \"country\": \"\",\n  \"lat\": 537.7645358,\n  \"lng\": -522.4730327,\n  \"name\": \"This Spot's name is longer than 50 characters, which means this should throw an error!\",\n  \"description\": \"\",\n  \"price\": -50\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Spot - Invalid Spot Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"321 Valid Edit Way\",\n  \"city\": \"Edicity\",\n  \"state\": \"New Editia\",\n  \"country\": \"United States of Edited Data\",\n  \"lat\": -26.6534247,\n  \"lng\": 133.5641438,\n  \"name\": \"The Edited Spot\",\n  \"description\": \"Place where valid edits can stay\",\n  \"price\": 321\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Spots - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a 2nd User for Testing",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"SecondTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"second.test@gmail.com\",\n  \"username\": \"secondaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 2nd User *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"secondaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create an Image for a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"Not Your Spot Rd\",\n  \"city\": \"Trespass City\",\n  \"state\": \"Not Your State\",\n  \"country\": \"Unauthorized States of Americannot\",\n  \"lat\": -50.6534247,\n  \"lng\": 100.5641438,\n  \"name\": \"Not Your Name\",\n  \"description\": \"A place that you shouldn't have access to\",\n  \"price\": 100\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Spot Image",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spot-images/{{spotImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spot-images",
						"{{spotImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Review - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"review\": \"\",\n    \"stars\": -3\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Review - Invalid Spot Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"review\": \"This was an awesome spot!\",\n  \"stars\": 5\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('reviewId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"review\": \"This was an awesome spot!\",\n  \"stars\": 5\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Review - Already Reviewed",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"review\": \"This was an awesome spot!\",\n  \"stars\": 5\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create an Image for a Review  - Invalid Review Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/5000/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"5000",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 1",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('reviewImageId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image1.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 2",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image2.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 3",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image3.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 4",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image4.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 5",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image5.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 6",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image6.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 7",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image7.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 8",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image8.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 9",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image9.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Image for a Review - 10",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image10.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create an Image for a Review - Limit Reached",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image_limit.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Reviews of Current User - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Reviews by Spot Id - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get Reviews by Spot Id - Invalid Spot Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"review\": \"This was an TERRIBLE spot!\",\n  \"stars\": 1\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Review - Invalid Body",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"review\": \"\",\n  \"stars\": -3\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Review - Invalid Review Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"review\": \"This was an TERRIBLE spot!\",\n  \"stars\": 1\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Reviews of Current User - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Reviews by Spot Id - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a Booking Based on a Spot Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('bookingId', responseJson.id)",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-22\",\n  \"endDate\": \"2030-11-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a 2nd Booking for Testing",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-22\",\n  \"endDate\": \"2030-10-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Conflicting Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-22\",\n  \"endDate\": \"2030-11-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Same Start & End Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-12-22\",\n  \"endDate\": \"2030-12-22\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - End Date Before Start Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-12-22\",\n  \"endDate\": \"2030-12-20\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Start Date On Existing Start Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-22\",\n  \"endDate\": \"2030-11-28\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Start Date On Existing End Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-26\",\n  \"endDate\": \"2030-11-28\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - End Date On Existing Start Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-20\",\n  \"endDate\": \"2030-11-22\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - End Date On Existing End Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-20\",\n  \"endDate\": \"2030-11-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Start Date During Existing Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-24\",\n  \"endDate\": \"2030-11-28\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - End Date During Existing Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-20\",\n  \"endDate\": \"2030-11-24\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Dates Within Existing Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-23\",\n  \"endDate\": \"2030-11-25\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Dates Surround Existing Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-11-15\",\n  \"endDate\": \"2030-11-30\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Dates In The Past",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2020-11-15\",\n  \"endDate\": \"2020-11-30\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Booking - Invalid Spot Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-12-24\",\n  \"endDate\": \"2030-12-25\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Current User's Bookings - Verify Creation, Prevention",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Bookings for a Spot By Id - Verify Creation, Prevention",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get All Bookings for a Spot By Id - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/5000/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"5000",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit a Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-09-22\",\n  \"endDate\": \"2030-09-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit a Booking - Does Not Conflict Within Itself",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-09-23\",\n  \"endDate\": \"2030-09-25\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit a Booking - Does Not Conflict Surrounding Itself",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-09-15\",\n  \"endDate\": \"2030-09-30\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Conflicting Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-22\",\n  \"endDate\": \"2030-10-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Same Start & End Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-12-22\",\n  \"endDate\": \"2030-12-22\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - End Date Before Start Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-12-22\",\n  \"endDate\": \"2030-12-20\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Start Date On Existing Start Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-22\",\n  \"endDate\": \"2030-10-28\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Start Date On Existing End Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-26\",\n  \"endDate\": \"2030-10-28\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - End Date On Existing Start Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-20\",\n  \"endDate\": \"2030-10-22\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - End Date On Existing End Date",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-20\",\n  \"endDate\": \"2030-10-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Start Date During Existing Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-24\",\n  \"endDate\": \"2030-10-28\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - End Date During Existing Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-20\",\n  \"endDate\": \"2030-10-24\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Dates Within Existing Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-23\",\n  \"endDate\": \"2030-10-25\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Dates Surround Existing Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-10-15\",\n  \"endDate\": \"2030-10-30\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Dates In The Past",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2020-10-15\",\n  \"endDate\": \"2020-10-30\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Booking - Invalid Booking Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-12-24\",\n  \"endDate\": \"2030-12-25\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Current User's Bookings - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Bookings for a Spot By Id - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as Original User *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Bookings for a Spot By Id - Owned By The User",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create an Image for a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create a Booking Based on a Spot Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-05-22\",\n  \"endDate\": \"2030-05-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"review\": \"Actually I take it back this spot is PERFECT\",\n  \"stars\": 5\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"startDate\": \"2030-03-22\",\n  \"endDate\": \"2030-03-26\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Review Image",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/review-images/{{reviewImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"review-images",
						"{{reviewImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a 3rd User for Testing",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"ThirdTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"third.test@gmail.com\",\n  \"username\": \"thirdaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 3rd User *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"thirdaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 2nd User Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"secondaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Review Image",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/review-images/{{reviewImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"review-images",
						"{{reviewImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Review Image - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/review-images/{{reviewImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"review-images",
						"{{reviewImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Reviews of Current User - Verify Image Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Reviews by Spot Id - Verify Image Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Review",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Review - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/{{reviewId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"{{reviewId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Reviews of Current User - Verify Review Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/reviews/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"reviews",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Reviews by Spot Id - Verify Review Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/reviews",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Booking",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Booking - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/{{bookingId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"{{bookingId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Current User's Bookings - Verify Deletion",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/bookings/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"bookings",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Bookings for a Spot By Id - Verify Deletion",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}/bookings",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}",
						"bookings"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as Original User Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Spot Image",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spot-images/{{spotImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spot-images",
						"{{spotImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Spot Image - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spot-images/{{spotImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spot-images",
						"{{spotImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Spots - Verify Image Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Spots of Current User - Verify Image Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of a Spot by Id - Verify Image Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Spot",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Spot - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Spots - Verify Spot Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Spots of Current User - Verify Spot Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get Details of a Spot by Id - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots/{{spotId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots",
						"{{spotId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Spots With Params",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					],
					"query": [
						{
							"key": "page",
							"value": "",
							"description": "integer, minimum: 1, maximum: 10, default: 1",
							"disabled": true
						},
						{
							"key": "size",
							"value": "",
							"description": "integer, minimum: 1, maximum: 20, default: 20",
							"disabled": true
						},
						{
							"key": "minLat",
							"value": "",
							"description": "decimal, optional",
							"disabled": true
						},
						{
							"key": "maxLat",
							"value": "",
							"description": "decimal, optional",
							"disabled": true
						},
						{
							"key": "minLng",
							"value": "",
							"description": "decimal, optional",
							"disabled": true
						},
						{
							"key": "maxLng",
							"value": "",
							"description": "decimal, optional",
							"disabled": true
						},
						{
							"key": "minPrice",
							"value": "",
							"description": "decimal, optional, minimum: 0",
							"disabled": true
						},
						{
							"key": "maxPrice",
							"value": "",
							"description": "decimal, optional, minimum: 0",
							"disabled": true
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get All Spots With Params - Invalid Params",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/spots",
					"host": [
						"{{url}}"
					],
					"path": [
						"spots"
					],
					"query": [
						{
							"key": "page",
							"value": "",
							"description": "integer, minimum: 1, maximum: 10, default: 1",
							"disabled": true
						},
						{
							"key": "size",
							"value": "",
							"description": "integer, minimum: 1, maximum: 20, default: 20",
							"disabled": true
						},
						{
							"key": "minLat",
							"value": "",
							"description": "decimal, optional",
							"disabled": true
						},
						{
							"key": "maxLat",
							"value": "",
							"description": "decimal, optional",
							"disabled": true
						},
						{
							"key": "minLng",
							"value": "",
							"description": "decimal, optional",
							"disabled": true
						},
						{
							"key": "maxLng",
							"value": "",
							"description": "decimal, optional",
							"disabled": true
						},
						{
							"key": "minPrice",
							"value": "",
							"description": "decimal, optional, minimum: 0",
							"disabled": true
						},
						{
							"key": "maxPrice",
							"value": "",
							"description": "decimal, optional, minimum: 0",
							"disabled": true
						}
					]
				}
			},
			"response": []
		}
	]
}