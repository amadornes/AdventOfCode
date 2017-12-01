#include <stdio.h>
#include <string.h>

int main() {
    // Read a number of max length 5000
    char input[5000];
    printf("Input: ");
    scanf("%s", input);
    int len = strlen(input);

    // Determine whether we should advance 1 or len/2 every step
    char advanceMode;
    printf("Advance mode: ");
    fflush(stdin);
    scanf("%c", &advanceMode);
    advanceMode -= '0';
    int advance = advanceMode ? len / 2 : 1;

    // Add up all the numbers that match the one X spots ahead in the array
    int total = 0;
    for (int i = 0; i < len; i++) {
        if (input[i] == input[(i + advance) % len]) {
            total += input[i] - '0';
        }
    }

    // We're done here!
    printf("Result: %i", total);

    return 0;
}
