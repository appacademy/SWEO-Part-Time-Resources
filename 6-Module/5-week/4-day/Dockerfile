FROM ubuntu
RUN echo "Hello from Our Image" \
  && mkdir new_directory \
  && mkdir second
WORKDIR new_directory
EXPOSE 80
COPY . ../second
CMD echo "The image did it's thing"