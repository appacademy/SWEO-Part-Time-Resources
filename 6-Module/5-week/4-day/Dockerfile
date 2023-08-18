FROM ubuntu
ENV MY_NAME='John Doe'
# echo MY_NAME
RUN mkdir new_directory \
  && mkdir second \
  && echo MY_NAME
EXPOSE 80
CMD echo 'hello from our image'
WORKDIR new_directory
COPY . ../second