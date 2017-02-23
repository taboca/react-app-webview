<View style={[styles.addressBarRow]}>
  <TouchableOpacity
    onPress={this.goBack}
    style={this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}>
    <Text>
       {'<'}
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={this.goForward}
    style={this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}>
    <Text>
      {'>'}
    </Text>
  </TouchableOpacity>
  <TextInput
    ref={TEXT_INPUT_REF}
    autoCapitalize="none"
    defaultValue={this.state.url}
    onSubmitEditing={this.onSubmitEditing}
    onChange={this.handleTextInputChange}
    clearButtonMode="while-editing"
    style={styles.addressBarTextInput}
  />
  <TouchableOpacity onPress={this.pressGoButton}>
    <View style={styles.goButton}>
      <Text>
         Go!
      </Text>
    </View>
  </TouchableOpacity>
</View>
