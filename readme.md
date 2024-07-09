openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048 
openssl rsa -pubout -in private.key -out public.key -outform PEM  
JWT_PRIVATE_KEY=$(openssl base64 -in private.key -A) && JWT_PUBLIC_KEY=$(openssl base64 -in public.key -A) && echo "JWT_PRIVATE_KEY=\"$JWT_PRIVATE_KEY\"" >> .env && echo "JWT_PUBLIC_KEY=\"$JWT_PUBLIC_KEY\"" >> .env